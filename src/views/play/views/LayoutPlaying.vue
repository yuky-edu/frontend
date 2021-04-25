<template>
<div id="layout-playing">

  <Profile />

</div>
</template>

<script>
export default {

  computed: {
    //
  },

  methods: {
    ping() {
      this.socket.emit('ping')
    }
  },

  mounted() {
    this.ping()
  },

  data() {
    return {
      // player_session: this.$cookies.get('player_session')
    }
  },

  components: {
    Profile: require('./page/Profile').default
  }
}
</script>
