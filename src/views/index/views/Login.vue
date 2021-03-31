<template>
<div id="login">
  <div class="container-fluid">
    <div class="row sub-fluid">
      <div class="col-xs-12 col-sm-7 col-md-5 col-lg-4 y-panel-left">
        <div class="y-wrapper">

          <div class="row">
            <div class="col-6 text-right">
              <button class="btn btn-outline-light" name="button">Masuk</button>
            </div>
            <div class="col-6 text-left">
              <button class="btn btn-outline-light border-transparent" name="button">Daftar</button>
            </div>
          </div>

          <div class="v-panel-body">
            <h1>LOREM IPSUM DOLOR SIT AMET</h1>
            <p>LOREM IPSUM DOLOR SIT AMET</p>
          </div>

          <div class="back">
            <router-link :to="{name: 'Home'}">
              <span class="fa fa-arrow-left"></span>
              <p>Kembali ke Beranda</p>
            </router-link>
          </div>

        </div>
      </div>
      <div class="col-md-7 col-lg-8 y-panel-right">
        <div class="y-wrapper">

          <div class="row">
            <div class="col-sm-6 offset-sm-3">
              <div class="external-auth">
                <div class="wrapper d-flex">
                  <div class="with-google">
                    <button class="btn btn-outline-dark">
                      <span class="fa fa-user"></span>
                      <span>Login With Google</span>
                    </button>
                  </div>
                  <div class="with-facebook">
                    <button class="btn" name="button">
                      <i class="fa fa-facebook"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="line-space">
                <span>Atau</span>
              </div>

              <div class="main-auth">
                <form action="/action_page.php">
                  <div class="form-group">
                    <input type="email" class="form-control" placeholder="example@yuky.com">
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password">
                  </div>
                  <div class="form-group form-check">
                    <label class="form-check-label">
                      <input class="form-check-input" type="checkbox"> Remember me
                    </label>
                  </div>
                  <button class="btn btn-primary">Masuk</button>
                </form>
                <p>Lupa Password? <a href="#">Klik Disini</a></p>
              </div>
            </div>
          </div>

        </div>
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
