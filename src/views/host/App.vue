<template>
<div id="app">
  <router-view />
</div>
</template>

<script>
export default {

  computed: {
    //
  },

  methods: {
    getProfile: function() {
      this.Nprogress.start()
      const token = this.Global.getCookie('token')

      if (token) {
        this.axios(this.API_URL + '/hosts/user/myInfo')
          .then( ({data}) => {
            this.$store.commit(this.Xprofile.m[1], data)
            this.Nprogress.done()
          })
          .catch(error => {
            this.Global.expiredToken()
          })
      } else {
        this.Global.expiredToken()
      }
    },
  },

  mounted() {
    this.getProfile()
  },

  data() {
    return {
      //
    }
  },
}
</script>
