<template>
<div id="login">
  <div class="container-fluid">
    <div class="row sub-fluid">
      <div class="col-xs-12 col-sm-7 col-md-5 col-lg-4 y-panel-left">
        <div class="y-wrapper">
          <div class="row text-center">
            <div class="col-6">
              <button class="btn btn-outline-light" name="button">Masuk</button>
            </div>
            <div class="col-6">
              <button class="btn btn-outline-light" name="button">Daftar</button>
            </div>
          </div>

          <div class="v-panel-body">
            <h1>LOREM IPSUM DOLOR SIT AMET</h1>
            <p>LOREM IPSUM DOLOR SIT AMET</p>
          </div>

          <div class="back">
            <a href="#">
              <span class="fa fa-arrow-left"></span>
              <p>Kembali ke Beranda</p>
            </a>
          </div>
        </div>
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
