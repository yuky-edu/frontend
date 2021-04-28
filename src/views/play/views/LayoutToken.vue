<template>
<div id="layout-token">
  <WaitingRoom v-if="page == 'Waiting'" @changePage="onChangePage"/>
  <Entity v-if="page == 'Entity'" @changePage="onChangePage"/>
  <Loading v-if="page == 'Loading'"/>
</div>
</template>

<script>
export default {

  computed: {
    //
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
        console.log(data);
        if (data.status == 'wait') {
          this.$nextTick(() => {
            this.page = 'Waiting'
          })
        }
        else {
          this.$nextTick(() => {
            this.page = 'Entity'
          })
        }
      })
    }
  },

  beforeMount() {
    this.$store.dispatch('player/getMyInfo')
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
  }
}
</script>
