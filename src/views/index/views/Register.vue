<template>
<div id="register">
  <div class="container-fluid">
    <div class="row sub-fluid">
      <div class="col-lg-4 d-none d-lg-block y-panel-left">
        <div class="y-wrapper">
          <div class="row">
            <div class="col-6 text-right">
              <router-link :to="{ name: 'Login' }">
                <button class="btn btn-outline-light border-transparent" name="button">Masuk</button>
              </router-link>
            </div>
            <div class="col-6 text-left">
              <router-link :to="{ name: 'Register'}">
                <button class="btn btn-outline-light" name="button">Daftar</button>
              </router-link>
            </div>
          </div>
          <div class="v-panel-body">
            <h1>REGISTER_ IPSUM DOLOR SIT AMET</h1>
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

              <ExternalAuth text="Register"></ExternalAuth>

              <div class="line-space">
                <hr>
                <span>Atau</span>
                <hr>
              </div>
              <div class="main-auth">
                <form @submit.prevent="registerHost()">
                  <div class="form-group y-form row">
                    <div class="col-6">
                      <input v-model="register.firstName" ref="firstName" type="first-name" class="form-control form-control-lg" placeholder="Nama Depan">
                    </div>
                    <div class="col-6">
                      <input v-model="register.lastName" type="last-name" class="form-control form-control-lg" placeholder="Nama Belakang" style="width: 300px;">
                    </div>
                  </div>
                  <div class="form-group y-form">
                    <input v-model="register.email" type="email" class="form-control form-control-lg" placeholder="Email">
                  </div>
                  <div class="form-group y-form">
                    <input v-model="register.password" type="password" class="form-control form-control-lg" placeholder="Password">
                  </div>
                  <div class="form-group y-form">
                    <input v-model="register.repeatPassword" type="password" class="form-control form-control-lg" placeholder="Konfirmasi Password">
                  </div>
                  <button type="submit" class="btn btn-block y-btn-lg btn-purple mb-4 mt-5" :disabled="btnLoading">
                    <span>Daftar Sekarang</span>
                  </button>
                </form>
                <p class="y-more-action">
                  <span>Sudah Punya Akun? </span>
                  <router-link :to="{ name: 'Login'}">Masuk</router-link>
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
    registerHost: function() {
      this.btnLoading = true
      this.Nprogress.start()

      this.axios.post(this.API_URL + '/auth/register', {
          first_name: this.register.firstName,
          last_name: this.register.lastName,
          email: this.register.email,
          password: this.register.password
        })
        .then(({
          data
        }) => {
          window.console.log(data)
          if (data.status) {
            this.$router.push({
              name: 'Login',
              query: {
                'email': this.register.email
              }
            })
          } else {
            window.console.log("Register gagal")
          }
          this.btnLoading = false
          this.Nprogress.done()
        })
    },

    handleVisiblePassowrd: function() {
      this.visiblePassword = !this.visiblePassword
    },

    mergeName: function() {
      //
    }
  },

  mounted() {
    this.$refs.firstName.focus()
  },

  data() {
    return {
      register: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
      },
      btnLoading: false
    }
  },

  components: {
    ExternalAuth
  }
}
</script>
