<template>
<div id="entity" v-if="entity" class="container p-0">
  <div v-if="entity.data.type == 'q'" class="y-question">
    <div v-if="myAnswer.status == ''" class="text-white text-center">
      Tunggu, Yaa! 😉...
    </div>
    <div v-else>
      <div class="modal fade" id="showQustion" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div class="media-wrepper" v-if="entity.data.media.type !== null && entity.data.media.path !== null">
                <div v-if="entity.data.media.type == 'image'">
                  <img :src="entity.data.media.path" class="img-fluid" alt="Yuky media">
                </div>

                <div v-if="entity.data.media.type == 'audio'">
                  <audio controls>
                    <source :src="entity.data.media.path" type="audio/mp3">
                    Your browser does not support the audio element.
                  </audio>
                </div>

                <div v-if="entity.data.media.type == 'video'">
                  <video controls>
                    <source :src="entity.data.media.path" type="video/mp4">
                    Your browser does not support HTML video.
                  </video>
                </div>
              </div>
              <div v-html="entity.data.question"></div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-dark waves-effect waves-light" data-dismiss="modal">Tutup</button>
            </div>
          </div>
        </div>
      </div>

      <div class="w-100 text-center mt-3">
        <button class="btn y-play-custom-shadow show-q waves-effect waves-light pl-4 pr-4" data-toggle="modal" data-target="#showQustion" name="button">
          <span>Lihat Soal</span>
        </button>
      </div>
  <!--
      <div class="w-100 text-white text-center mt-5">
        <p>Silahkan pilih kartu yang benar 👍</p>
      </div> -->

      <div class="row mt-5">
        <div v-for="(item, index) in entity.data.answer" class="col-6">
          <div class="play-card" :class="myAnswer.data.key == item.key && entity.answered_entity.includes(entity.data.id) ? myAnswer.data.correct ? 'answer-green' : 'answer-red' : false">
            <div class="label-wrapper">
              <div class="circle-wrapper">
                <h1>{{ item.label }}</h1>
              </div>
            </div>
            <p class="answer">
              {{ item.value }}
            </p>
            <div class="text-center">
              <button :disabled="isSelected" v-if="!entity.answered_entity.includes(entity.data.id)" @click="selectCard(item)" class="btn w-100 show-a y-play-custom-shadow waves-effect waves-light btn-md" name="button">
                <span>Pilih</span>
              </button>
              <button v-else disabled :class="item.correct ? 'btn-success' : 'btn-danger'" class="btn w-100 waves-effect waves-light btn-md text-white" name="button">
                <span v-if="item.correct">Benar</span>
                <span v-else="item.correct">Salah</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="selected-card" v-if="myAnswer.status == 'answered' && !entity.answered_entity.includes(entity.data.id)">
        <CardSelect v-if="!myAnswer.answered" :data="myAnswer.data"/>
        <CardWrongAnswer v-if="myAnswer.answered && !myAnswer.data.correct" :data="myAnswer.data"/>
        <CardCorrectAnswer v-if="myAnswer.answered && myAnswer.data.correct" :data="myAnswer.data"/>
      </div>
    </div>
  </div>

  <div v-if="entity.data.type == 't'" class="y-theory">
    <div class="container mt-5">

      <div class="media-wrepper" v-if="entity.data.media.type !== null && entity.data.media.path !== null">
        <div v-if="entity.data.media.type == 'image'">
          <img :src="entity.data.media.path" class="img-fluid" alt="Yuky media">
        </div>

        <div v-if="entity.data.media.type == 'audio'">
          <audio controls>
            <source :src="entity.data.media.path" type="audio/mp3">
            Your browser does not support the audio element.
          </audio>
        </div>

        <div v-if="entity.data.media.type == 'video'">
          <video controls>
            <source :src="entity.data.media.path" type="video/mp4">
            Your browser does not support HTML video.
          </video>
        </div>
      </div>

      <div v-html="entity.data.theory" class="text-wrapper"></div>

    </div>
  </div>

  <!-- {{entity}} -->

</div>
</template>

<script>
import CardSelect from './components/CardSelect'
import CardWrongAnswer from './components/CardWrongAnswer'
import CardCorrectAnswer from './components/CardCorrectAnswer'

export default {

  computed: {
    //
  },

  methods: {
    requestEntity() {
      this.socket.emit('reqEntity')
      this.socket.on('resEntity', (data) => {
        this.entity = data
        this.myAnswer.status = ''
        this.myAnswer.answered = false
        if (this.entity.data.type == 'q') {
          this.checkSelectedCard()
        }
      })
      this.socket.on('rank', (data) => {
        this.$parent.changePage('Score')
      })
    },

    selectCard(item) {
      this.isSelected = true
      this.$store.dispatch('player_answer/answering', {
        entity: this.entity.data.id,
        answer: item.key
      }).then(data => {
        this.socket.emit('reqAnswer', this.$parent.myInfo.id)
        item["id"] = data.id
        this.myAnswer.status = 'answered'
        this.myAnswer.data = item
        this.isSelected = false
      })
    },

    checkSelectedCard() {
      this.$store.dispatch('player_answer/getByPlayerAndEntity', this.entity.data.id).then(data => {
        if (data.data) {
          let item = this.entity.data.answer.find(function(x) {
            return x.key == data.data.answer
          })
          item["id"] = data.data.id
          this.myAnswer.status = 'answered'
          this.myAnswer.data = item
        }
        else {
          this.myAnswer.status = 'notAnswered'
        }
      })
    },

    handleSocket() {
      this.socket.on('checkAnswer', () => {
        this.myAnswer.answered = true
      })
    }
  },

  beforeMount() {
  },

  mounted() {
    this.requestEntity()
    this.handleSocket()
  },

  data() {
    return {
      entity: '',
      myAnswer: {
        status: '',
        data: '',
        answered: false
      },
      isSelected: false
    }
  },

  components: {
    CardSelect,
    CardWrongAnswer,
    CardCorrectAnswer
  }
}
</script>

<style scoped>
  .selected-card {
    position: fixed;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    padding-top: 100px;
    background: linear-gradient(180deg, #6935F0 0%, #5534CE 100%);
  }
  .answer-green {
    border: 5px solid #32c746;
  }
  .answer-red {
    border: 5px solid #F83939;
  }
</style>
