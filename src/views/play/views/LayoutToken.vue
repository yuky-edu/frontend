<template>
<div id="layout-token">
  <WaitingRoom v-if="page == 'Waiting'" @changePage="onChangePage"/>
  <Entity v-if="page == 'Entity'" @changePage="onChangePage"/>
  <Score v-if="page == 'Score'" @changePage="onChangePage"/>
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
    onChangePage(v) {
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
            this.$nextTick(() => {
              this.page = 'Waiting'
            })
            break;
          case 'off':
            this.$nextTick(() => {
              this.page = 'Score'
            })
            break;
          case 'on_mode_block':
            this.$nextTick(() => {
              this.page = 'Entity'
            })
            break;
          case 'on_mode_open':
            this.$nextTick(() => {
              this.page = 'Entity'
            })
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
