<template>
<div id="rank">
  <p class="text-warning">
    tampilkan aja datanya disini pakek {}

    <pre>
      {{data}}
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
    }
  },

  beforeMount() {
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
