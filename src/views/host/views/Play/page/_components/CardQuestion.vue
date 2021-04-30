<template>
<div id="card-question">

  <NavEntity :data="data" />
  <div class="modal fade bd-example-modal-lg" id="leaderboards" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
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
        <div class="modal-body">
          <h4 class="text-center mb-3">
            Papan Skor
          </h4>
          <div class="container-fluid">
            <div class="row">
              <div class="col">
                <div class="p-2 rounded text-center bg-success text-white">
                  BENAR
                </div>
                <ul class="list-group">
                  <li v-for="(item, index) in leaderboards.correct" class="list-group-item">
                    <div class="container-fluid">
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
                    <div class="container-fluid">
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
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
        </div>
      </div>
    </div>
  </div>

  <div class="e-card">
    <div class="e-body">

      <div v-if="data.data.media.type" class="e-media">
        <div class="e-media-wrapper">

          <div v-if="data.data.media.type == 'image'">
            <img :src="data.media.path" alt="Yuky media">
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

      <div v-html="data.data.question" class="e-text container">
      </div>
    </div>
    <div class="answer-body">
      <div class="row">
        <div v-for="(item, index) in data.data.answer" class="col-xl-4 col-lg-6">
          <div class="answer" :class="data.isCheckAnswer && data.data.answer[index].correct ? 'bg-success' : false">
            <button class="btn btn-sm">
              {{ item.label }}
            </button>
            <span>{{ item.value }}</span>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="counter" v-if="counter.status">
    {{counter.number}}
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
      this.data.isCheckAnswer = true
      this.$store.dispatch('player_answer/getAnswerByEntity', this.data.data.id).then(data => {
        data.map(x => {
          if (x.correct)
            this.leaderboards.correct.push(x)
          else
            this.leaderboards.wrong.push(x)
        })
        this.openLeaderboardsModal()
        this.counter.status = false
        this.counter.number = 3
      })
    },

    countBeforeCheck() {
      this.counter.status = true
      var interval = setInterval(function() {
        this.counter.number--
        if (this.counter.number == 0) {
          this.checkAnswer()
          clearInterval(interval)
        }
      }.bind(this), 1000)
    },

    openLeaderboardsModal() {
      $("#leaderboards").modal("show")
    }
  },

  beforeMount() {
  },

  mounted() {
    // this.$nextTick(() => {
    //   this.data.isCheckAnswer = false
    // })
  },

  data() {
    return {
      counter: {
        status: false,
        number: 3
      },
      leaderboards: {
        correct: [],
        wrong: []
      }
    }
  },

  props: ['data'],

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
    padding: 30% 0;
    text-align: center;
    color: #FFF;
  }
</style>
