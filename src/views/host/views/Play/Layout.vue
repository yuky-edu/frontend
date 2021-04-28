<template>
<div id="play-layout">
  <div class="bg-play">

    <Question />

    <!-- <Timer /> -->
    <!-- <WaitingRoom /> -->

  </div>
</div>
</template>

<script>
export default {

  computed: {
    //
  },

  methods: {
    //
  },

  mounted() {
    window.$query = this.$route.query

    this.$store.dispatch('yclass/getMyClassByCode', $query.code)
    this.$store.dispatch(
      'player/getPlayersBySession',
      this.$cookies.get('play_session').id
    )
  },

  data() {
    return {
    }
  },

  components: {
    Question: require('./page/Question').default,
    Timer: require('./page/Timer').default,
    WaitingRoom: require('./page/WaitingRoom').default,
  }
}
</script>
