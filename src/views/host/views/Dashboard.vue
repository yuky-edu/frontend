<template>
<div class="container">
  <h1>Halaman Dashboard</h1>
  <a href="/">Home</a>
  <a href="#" @click="logOut()">Logout</a>
</div>
</template>

<script>
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
}
</script>

<style lang="scss">

</style>
