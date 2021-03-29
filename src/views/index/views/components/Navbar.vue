<template lang="html">
  <div class="">
    <!-- <nav class="navbar navbar-light navbar-expand-md navbar navbar-expand-lg fixed-top" id="mainNav" style="margin-top: 200px;">
      <div class="nav-container">
        <a class="navbar-brand" href="#">
          <img src="/assets/img/logo.svg">
        </a>
        <button data-toggle="collapse" class="navbar-toggler navbar-toggler-right" data-target="#navbarResponsive"
          type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" value="Menu"><i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="nav navbar-nav ml-auto">

            <li v-for="(v, i) in nav" class="nav-item text-light nav-link nav-a">
              <a class="nav-link active text-light" :href="v.link">{{ v.label }}</a>
            </li>

            <li class="nav-item nav-link button" role="presentation">
              <router-link :to="{ name: 'Login'}">
                <button class="btn btn-nav btn-outline-light btn-login">Masuk</button>
              </router-link>
            </li>

            <li class="nav-item nav-link" role="presentation">
              <router-link :to="{ name: 'Register'}">
                <button class="btn btn-nav btn-outline-light btn-register">Daftar</button>
              </router-link>
            </li>

          </ul>
        </div>
      </div>
    </nav> -->

    <nav class="navbar navbar-dark navbar-expand-xl fixed-top">
      <div class="container">
        <a class="navbar-brand logo" href="#">
        <img src="/assets/img/logo.svg">
      </a>
      <button data-toggle="collapse" class="navbar-toggler" data-target="#navbarNav"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="nav navbar-nav ml-auto">
            <li v-for="(v, i) in nav" class="nav-item text-light nav-link nav-a">
              <a class="nav-link active text-light" :href="v.link">{{ v.label }}</a>
            </li>

            <li class="nav-item nav-link button" role="presentation">
              <router-link :to="{ name: 'Login'}">
                <button class="btn btn-nav btn-outline-light btn-login">Masuk</button>
              </router-link>
            </li>

            <li class="nav-item nav-link" role="presentation">
              <router-link :to="{ name: 'Register'}">
                <button class="btn btn-nav btn-outline-light btn-register">Daftar</button>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </div>
</template>

<script>
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
      nav: [{
          label: 'Beranda',
          link: '#'
        },
        {
          label: 'Tentang',
          link: '#'
        },
        {
          label: 'Tutorial',
          link: '#'
        },
        {
          label: 'Kontak',
          link: '#'
        },
      ]
    }
  },
}
</script>

<style lang="css" scoped>

</style>
