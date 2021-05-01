<template>
<div id="rank" v-if="data">
  <p class="text-warning">
    tampilkan aja datanya disini pakek {}

    <pre>
      {{$parent.myInfo}}

      Total Benar:
      {{
        data.filter(function(x) {
          return x.correct == true
        }).length
      }}

      Salah:
      {{
        data.filter(function(x) {
          return x.correct == false
        }).length
      }}
    </pre>
  </p>
  <div class="w-100">
    <button class="btn btn-block btn-warning">Selesai</button>
    <button class="btn btn-block btn-success">Bagikan</button>
  </div>
</div>
</template>

<script>
export default {

  computed: {
    //
  },

  methods: {
    getMyAnswer() {
      this.$store.dispatch('player_answer/getMyAnswerBySession', this.$parent.sessionInfo.id).then(data => {
        this.data = data.data
      })
    },
    refreshMyInfo() {
      this.$store.dispatch('player/getMyInfo')
    }
  },

  beforeMount() {
    this.refreshMyInfo()
    this.getMyAnswer()
  },

  mounted() {
    //
  },

  data() {
    return {
      data: ''
    }
  },
}
</script>
