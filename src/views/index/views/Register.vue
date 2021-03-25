<template>
<v-app>
  <v-container>
    <h1>Register Page</h1>

    <v-form style="margin-bottom: 12px" ref="register" v-model="rules.valid" @submit.prevent="registerHost()">

      <v-text-field label="Name" type="text" name="name" :rules="rules.name" v-model="register.name"></v-text-field>

      <v-text-field label="E-Mail" type="email" name="email" :rules="rules.email" v-model="register.email"></v-text-field>

      <v-text-field label="Password" name="login.password" required :rules="rules.password" :append-icon="visiblePassword ? 'mdi-eye-off' : 'mdi-eye'" :type="visiblePassword ? 'password' : 'text'" v-model="register.password"
        @click:append="handleVisiblePassowrd()"></v-text-field>

      <v-btn type="submit" color="primary" :loading="btnLoginLoading" :disabled="!rules.valid || btnLoginLoading">Register</v-btn>

    </v-form>

    <router-link :to="{name: 'Home'}">Home</router-link>

  </v-container>
</v-app>
</template>

<script>
export default {

  computed: {
    //
  },

  methods: {
    registerHost: function() {
      window.console.log(this.register)
      this.btnLoginLoading = true

      this.axios.post(this.API_URL + '/auth/register', this.register)
        .then(({
          data
        }) => {
          window.console.log(data)
          if (data.status) {
            this.$router.push('Login')
          } else {
            window.console.log("Register gagal")
          }
          this.btnLoginLoading = false
        })
    },

    handleVisiblePassowrd: function() {
      this.visiblePassword = !this.visiblePassword
    },
  },

  mounted() {
    //
  },

  data() {
    return {
      register: {
        name: '',
        email: '',
        password: ''
      },
      rules: {
        name: [
          v => !!v || 'Name is required'
        ],
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
