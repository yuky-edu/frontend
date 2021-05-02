<template>
<div id="layout-token">
  <WaitingRoom v-if="page == 'Waiting'"/>
  <Entity v-if="page == 'Entity'"/>
  <Score v-if="page == 'Score'"/>
  <Loading v-if="page == 'Loading'"/>

</div>
</template>

<script>
export default {

  computed: {
    myInfo: function() {
      return this.$store.state.player.myInfo.data
    }
  },

  methods: {
    changePage(v) {
      this.$nextTick(() => {
        this.page = v
      })
    },

    requestSessionInfo() {
      this.socket.emit('reqSessionInfo')
      this.socket.on('resSessionInfo', (data) => {
        this.sessionInfo = data
        switch (this.sessionInfo.status) {
          case 'wait':
              this.changePage('Waiting')
            break;
          case 'off':
              this.changePage('Score')
            break;
          case 'on_mode_block':
              this.changePage('Entity')
            break;
          case 'on_mode_open':
              this.changePage('Entity')
            break;
        }
      })
    }
  },

  mounted() {
    this.requestSessionInfo()
  },

  data() {
    return {
      page: 'Loading',
      sessionInfo: ''
    }
  },

  components: {
    WaitingRoom: require('./AfterToken/Waiting').default,
    Entity: require('./AfterToken/Entity').default,
    Loading: require('./AfterToken/Loading').default,
    Score: require('./AfterToken/Score').default,
  }
}
</script>
