<template>
<div>
  <ExternalAuth text="Login"></ExternalAuth>

  <div class="line-space">
    <hr>
    <span>Atau</span>
    <hr>
  </div>
  <div class="main-auth">
    <form @submit.prevent="loginHost()">
      <div class="form-group y-form">
        <input v-model="login.email" :class="{'is-invalid': invalid}" ref="email" type="email" class="form-control form-control-lg" placeholder="example@yuky.com" name="email">
      </div>
      <div class="form-group y-form">
        <input v-model="login.password" :class="{'is-invalid': invalid}" type="password" class="form-control form-control-lg" placeholder="Password" name="password">
        <div v-if="invalid" class="invalid-feedback">
          <span>E-mail atau password kamu salah!</span>
        </div>
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
      this.invalid = false

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
            this.invalid = true
          }
          this.btnLoginLoading = false
          this.Nprogress.done()
        })
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
      btnLoginLoading: false,
      invalid: false
    }
  },

  components: {
    ExternalAuth
  }
}
</script>
