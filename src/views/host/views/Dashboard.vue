<template>
<div id="dashboard">
  <Navbar></Navbar>
</div>
</template>

<script>
import Navbar from './components/Navbar'

export default {

  computed: {
    //
  },

  methods: {
    logOut: function() {
      const token = this.Global.getCookie('token')
      this.axios.get(this.API_URL + '/auth/logout', {
          params: {
            token: token
          }
        })
        .then(() => {
          document.cookie = 'token='
          window.location.href = '/#/login'
        })
    },
    checkToken: function() {
      //
    }
  },

  mounted() {
    this.checkToken()
  },

  data() {
    return {
      //
    }
  },

  components: {
    Navbar
  }
}
</script>

<style lang="scss">

</style>
