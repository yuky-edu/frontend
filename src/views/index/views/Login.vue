<template>
<div id="login">
  <div class="container-fluid">
    <div class="row sub-fluid">
      <div class="col-lg-4 d-none d-lg-block y-panel-left">
        <div class="y-wrapper">
          <div class="row">
            <div class="col-6 text-right">
              <router-link :to="{ name: 'Login' }">
                <button class="btn btn-outline-light" name="button">Masuk</button>
              </router-link>
            </div>
            <div class="col-6 text-left">
              <router-link :to="{ name: 'Register'}">
                <button class="btn btn-outline-light border-transparent" name="button">Daftar</button>
              </router-link>
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
      <div class="col-lg-8 y-panel-right">
        <div class="y-wrapper">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">

              <ExternalAuth text="Login"></ExternalAuth>

              <div class="line-space">
                <hr>
                <span>Atau</span>
                <hr>
              </div>
              <div class="main-auth">
                <form @submit.prevent="loginHost()">
                  <div class="form-group y-form">
                    <input v-model="login.email" ref="email" type="email" class="form-control form-control-lg" placeholder="example@yuky.com">
                  </div>
                  <div class="form-group y-form">
                    <input v-model="login.password" type="password" class="form-control form-control-lg" placeholder="Password">
                  </div>
                  <div class="form-group form-check">
                    <label class="form-check-label">
                      <input v-model="login.remember" class="form-check-input" type="checkbox">
                      <span> Remember me</span>
                    </label>
                  </div>
                  <button type="submit" class="btn btn-block y-btn-lg btn-purple mb-4 mt-3" :disabled="btnLoginLoading">
                    <span>Masuk</span>
                  </button>
                </form>
                <p class="y-more-action">
                  <span>Lupa Password? </span>
                  <a href="/">Klik Disini</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ExternalAuth from './components/ExternalAuth'

export default {

  computed: {
    //
  },

  methods: {
    loginHost: function() {
      this.btnLoginLoading = true
      this.Nprogress.start()

      this.axios.post(this.API_URL + '/auth/login', this.login)
        .then(({
          data
        }) => {
          window.console.log(data)
          if (data.status) {
            document.cookie = 'token=' + data.token
            window.console.log(document.cookie)
            window.location.href = '/host'
          } else {
            document.cookie = 'token='
          }
          this.btnLoginLoading = false
          this.Nprogress.done()
        })
    },

    alreadyLogin: function() {
      const token = this.Global.getCookie('token')
      if (token) {
        window.location.href = '/host'
      }
    },

    setEmailQuery: function() {
      const email = this.$route.query.email
      if (email) {
        this.login.email = email
        this.login.password = ''
      }
    }

  },

  mounted() {
    this.alreadyLogin()
    this.setEmailQuery()
    this.$refs.email.focus()
  },

  data() {
    return {
      login: {
        email: 'fanesahadi@gmail.com',
        password: '12345678',
        remember: false,
      },
      btnLoginLoading: false
    }
  },

  components: {
    ExternalAuth
  }
}
</script>
