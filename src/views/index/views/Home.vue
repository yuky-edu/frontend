<template>
<div class="home">

  <navbar></navbar>

  <header class="banner">
    <div class="body">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="text-light">Belajar Kreatif & Inovatif Dengan Yuky</h1>
            <!-- <p class="intro-text">A free, responsive, one page Bootstrap theme.<br>Created with love.</p><a class="btn btn-link btn-circle" role="button" href="#about"><i class="fa fa-angle-double-down animated"></i></a> -->
            <a href="/join">
              <button class="btn btn-warning btn-lg btn-play">Mulai Sekarang</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>


  <div>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
  </div>

</div>

<!-- <v-app>
  <v-container>
    <h1>Landing Page</h1>
    <a class="n-d" href="/join">
      <v-btn>
        Join
      </v-btn>
    </a>
    <router-link class="n-d" :to="{name: 'Login'}">
      <v-btn>
        Login
      </v-btn>
    </router-link>
    <router-link class="n-d" :to="{name: 'Register'}">
      <v-btn>
        Register
      </v-btn>
    </router-link>
  </v-container>
</v-app> -->
</template>

<script type="text/javascript">

import Navbar from './components/Navbar'

export default {

  computed: {
    //
  },

  methods: {
    //
  },

  mounted() {
    //
  },

  data() {
    return {
      //
    }
  },

  name: 'Beranda',
  components: {
    'navbar': Navbar
  }
}
</script>

<style lang="scss">
.n-d {
    text-decoration: none;
}
</style>
