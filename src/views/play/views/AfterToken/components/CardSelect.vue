<template>
<div id="card-select" class="text-center">
  <div class="container">
    <div class="w-100 text-center mb-5">
        <i class="fa fa-spinner rounded-circle p-2 bg-white fa-pulse" style="font-size: 30px;"></i>
    </div>
    <div class="play-card">
      <div class="label-wrapper">
        <div class="circle-wrapper">
          <h1>{{data.label}}</h1>
        </div>
      </div>
      <p class="answer text-dark">
        {{data.value}}
      </p>
      <div class="text-center">
        <!-- <button class="btn w-100 show-a y-play-custom-shadow waves-effect waves-light btn-lg" name="button">
          <span>Selengkapnya</span>
        </button> -->
      </div>
    </div>
    <button type="button" @click="cancelAnswer()" class="btn y-btn btn-outline-light btn-lg">Batalkan Jawaban</button>
  </div>
</div>
</template>

<script>

export default {

  computed: {
    //
  },

  methods: {
    cancelAnswer() {
      this.$store.dispatch('player_answer/cancelAnswer', this.data.id)
      this.$parent.myAnswer.status = 'notAnswered'
      this.socket.emit('cancelAnswer', this.$parent.$parent.myInfo.id)
    }
  },

  beforeMount() {
    this.$parent.sound.cardSelect.play()
  },

  mounted() {
    //
  },

  data() {
    return {
      //
    }
  },

  props: ["data"],

  components: {
  }
}
</script>
