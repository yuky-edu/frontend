<template>
<div id="card-question">

  <NavEntity :data="data" />

  <div class="entity-wrapper question-wrapper">

    <div v-if="data.data.media.type" class="entity-media mt-3">
      <div class="e-media-wrapper">

        <div v-if="data.data.media.type == 'image'">
          <img :src="data.data.media.path" alt="Yuky media">
        </div>

        <div v-if="data.data.media.type == 'audio'">
          <audio controls>
            <source :src="data.data.media.path" type="audio/mp3">
            Your browser does not support the audio element.
          </audio>
        </div>

        <div v-if="data.data.media.type == 'video'">
          <video controls>
            <source :src="data.data.media.path" type="video/mp4">
            Your browser does not support HTML video.
          </video>
        </div>

      </div>
    </div>

    <div v-html="data.data.question" class="entity-question container">
    </div>

    <div class="answer-body">
      <div class="row">
        <div v-for="(item, index) in data.data.answer" class="col-xl-4 col-lg-6">
          <div class="answer" :class="isAnswered(data.data.id) && data.data.answer[index].correct ? 'correct-answer' : false">
            <button class="btn btn-sm">
              {{ item.label }}
            </button>
            <span>{{ item.value }}</span>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Yang telah menjawab:
  {{playerAnswer}}

  <div class="counter" v-if="counter.status">
    {{counter.number}}
  </div> -->

  <div class="answered">
    <div class="answered-list">
      <div class="player-list">
        <img src="/avatar/avatar1.png" alt="">
      </div>
      <div class="player-list">
        <img src="/avatar/avatar2.png" alt="">
      </div>
      <div class="player-list">
        <img src="/avatar/avatar3.png" alt="">
      </div>
      <div class="player-list">
        <img src="/avatar/avatar4.png" alt="">
      </div>
      <div class="player-list">
        <img src="/avatar/avatar4.png" alt="">
      </div>
    </div>
    <div class="answered-count">
      <button class="btn btn-light">21+</button>
    </div>
  </div>

  <div class="modal fade bd-example-modal-lg" data-keyboard="false" data-backdrop="static" id="leaderboards" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title w-100">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-4">
                  Jawaban:
                </div>
                <div class="col-md-8 bg-primary text-white rounded">
                  {{
                    data.data.answer.find(function(x){
                      return x.correct == true
                    }).label
                  }}.
                  {{
                    data.data.answer.find(function(x){
                      return x.correct == true
                    }).value
                  }}
                </div>
              </div>
            </div>
          </h5>
        </div>
        <div class="modal-body px-0">
          <h4 class="text-center mb-3">
            Papan Skor
          </h4>
          <div class="container-fluid w-100 px-3">
            <div class="row">
              <div class="col">
                <div class="p-2 rounded text-center bg-success text-white">
                  BENAR
                </div>
                <ul class="list-group">
                  <li v-for="(item, index) in leaderboards.correct" class="list-group-item">
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <img :src="item.player_info.avatar" :alt="item.player_info.name" class="rounded img-thumbnail" width="100">
                        </div>
                        <div class="col">
                          {{item.player_info.name}}
                          <div class="text-success">
                            + {{item.score}}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="col">
                <div class="p-2 rounded text-center bg-danger text-white">
                  SALAH
                </div>
                <ul class="list-group">
                  <li v-for="(item, index) in leaderboards.wrong" class="list-group-item">
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <img :src="item.player_info.avatar" :alt="item.player_info.name" class="rounded img-thumbnail" width="100">
                        </div>
                        <div class="col">
                          {{item.player_info.name}}
                          <div class="text-danger">
                            + 0
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeLeaderboardsModal()">Tutup</button>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {

  computed: {
    //
  },

  methods: {
    checkAnswer() {
      this.$store.dispatch('yclass_session/updateAnsweredEntity', {
        id: this.$parent.$parent.runningSession.id,
        answered_entity: this.$parent.entity.data.id
      }).then(data => {
        this.$parent.entity.answered_entity = data.answered_entity
      })

      this.saveScore(this.leaderboards.correct)
      this.counter.status = false
      this.counter.number = 3
    },

    checkScore(cb = '') {
      this.leaderboards.isChecking = true
      this.$store.dispatch('player_answer/getAnswerByEntity', this.data.data.id).then(data => {
        data.map(x => {
          if (x.correct)
            this.leaderboards.correct.push(x)
          else
            this.leaderboards.wrong.push(x)
        })
        this.openLeaderboardsModal()
      }).then(() => {
        if (typeof cb == 'function') {
          cb()
        }
        this.leaderboards.isChecking = false
      })
    },

    closeLeaderboardsModal() {
      $("#leaderboards").modal("hide")
      this.leaderboards.correct = []
      this.leaderboards.wrong = []
    },

    isAnswered(val) {
      return this.$parent.entity.answered_entity.includes(val)
    },

    saveScore(correct) {
      for (var val of correct) {
        this.$store.dispatch('player/addScore', {
          id: val.player,
          data: {
            score: val.score
          }
        })
      }
    },

    countBeforeCheck() {
      this.counter.status = true
      var interval = setInterval(function() {
        this.counter.number--
        if (this.counter.number == 0) {
          this.checkAnswer()
          clearInterval(interval)
        }
      }.bind(this), 100)
    },

    openLeaderboardsModal() {
      $("#leaderboards").modal("show")
    },

    handleSocket() {
      // Get who already answering
      this.socket.on('reqAnswer', (id) => {
        let playerAnswer = this.$parent.$parent.players.find(function(x) {
          return x.id == id
        });
        this.playerAnswer.push(playerAnswer)
      })

      // Get who cancel answer
      this.socket.on('cancelAnswer', (id) => {
        let playerAnswer = this.$parent.$parent.players.findIndex(function(x) {
          return x.id == id
        });
        this.playerAnswer.splice(playerAnswer, 1)
      })
    },

    checkPlayerAnswer() {
      this.$store.dispatch('player_answer/getPlayerByEntity', this.$parent.entity.data.id).then(data => {
        for (var v of data) {
          let playerAnswer = this.$parent.$parent.players.find(function(x) {
            return x.id == v.player
          });
          this.playerAnswer.push(playerAnswer)
        }
      })
    }
  },

  beforeMount() {},

  mounted() {
    this.handleSocket()
    this.checkPlayerAnswer()
  },

  data() {
    return {
      data: this.$parent.entity,
      counter: {
        status: false,
        number: 3
      },
      leaderboards: {
        isChecking: false,
        correct: [],
        wrong: []
      },
      playerAnswer: []
    }
  },

  components: {
    NavEntity: require('./NavEntity').default,
  }
}
</script>

<style scoped>
.counter {
  position: fixed;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  font-size: 180px;
  padding: 20% 0 0 0;
  text-align: center;
  color: #FFF;
}
</style>
