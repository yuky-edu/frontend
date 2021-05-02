<template>
<div id="play-layout">
  <div class="bg-play">
    <Entity v-if="page == 'Entity'"/>
    <Timer v-if="page == 'Timer'"/>
    <WaitingRoom v-if="page == 'Waiting'" />
    <Rank v-if="page == 'Rank'" />
    <Loading v-if="page == 'Loading'" />
  </div>
</div>
</template>

<script>
export default {

  computed: {
    runningSession: function() {
      return this.$store.state.yclass_session.runningSession
    },

    players: function() {
      const data = this.$store.state.player.players
      if(data) return data
      return []
    }
  },

  watch: {
    'runningSession': function() {
      this.sessionInfo = this.runningSession
    }
  },

  methods: {
    changePage(v) {
      this.$nextTick(() => {
        this.page = v
      })
    },

    handleSocket() {
      // Send session info
      this.socket.on('reqSessionInfo', () => {
        this.socket.emit('resSessionInfo', this.sessionInfo)
      })
    }
  },

  mounted() {
    window.$params = this.$route.params
    this.handleSocket()

    this.$store.dispatch('entity/getEntitiesByCodeClass', $params.code)
    this.$store.dispatch('yclass/getMyClassByCode', $params.code)
    this.$store.dispatch(
      'player/getPlayersBySession',
      this.$cookies.get('play_session').id
    )
    this.$store.dispatch(
      'yclass_session/getSession',
      this.$cookies.get('play_session').id
    ).then(() => {
      switch (this.sessionInfo.status) {
        case 'wait':
            this.changePage('Waiting')
          break;
        case 'off':
            this.changePage('Rank')
          break;
        case 'on_mode_block':
            this.changePage('Entity')
          break;
        case 'on_mode_open':
            this.changePage('Entity')
          break;
      }
    })
  },

  data() {
    return {
      page: 'Loading',
      sessionInfo: ''
    }
  },

  components: {
    Entity: require('./page/Entity').default,
    Timer: require('./page/Timer').default,
    WaitingRoom: require('./page/WaitingRoom').default,
    Loading: require('./page/Loading').default,
    Rank: require('./page/Rank').default,
  }
}
</script>
