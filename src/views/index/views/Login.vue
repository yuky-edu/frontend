<template>
<div id="login">
  <div class="container-fluid">
    <div class="row sub-fluid">
      <div class="col-xs-12 col-sm-7 col-md-5 col-lg-4 y-panel-left">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="col-md-7 col-lg-8 y-panel-right">


      </div>
    </div> <!-- ./row -->
  </div>
</div>
</template>

<script>
export default {

  computed: {
    //
  },

  methods: {
    loginHost: function() {
      this.btnLoginLoading = true
      this.$refs.login.validate()

      this.axios.post(this.API_URL + '/auth/login', this.login)
        .then(({
          data
        }) => {
          window.console.log(data)
          if (data.status) {
            sessionStorage.setItem('_token', data.token)
            window.location.href = '/host'
          } else {
            sessionStorage.removeItem('_token')
          }
          this.btnLoginLoading = false
        })
      // .catch( errors => {

      // })
      // .then( response => {

      // })
    },

    alreadyLogin: function() {
      const _token = sessionStorage.getItem('_token')
      if (_token) {
        window.location.href = '/host'
      }
    },

    handleVisiblePassowrd: function() {
      this.visiblePassword = !this.visiblePassword
    },
  },

  mounted() {
    this.alreadyLogin()
  },

  data() {
    return {
      login: {
        email: '',
        password: '',
      },
      rules: {
        email: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        password: [
          v => !!v || 'Password is required',
        ],
        valid: false
      },
      visiblePassword: true,
      btnLoginLoading: false
    }
  },
}
</script>
