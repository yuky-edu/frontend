<template>
<div id="app">
  <Navbar></Navbar>

  <router-view class="host-view" />

  <footer>
    <p>© 2021 Yuky - ARNAV Developer. All rights reserved.</p>
  </footer>
</div>
</template>

<script>
import Navbar from './views/components/Navbar'

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
          .then(({
            data
          }) => {
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

  components: {
    Navbar
  }
}
</script>
