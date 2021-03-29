<template lang="html">
    <nav class="navbar navbar-dark navbar-expand-xl fixed-top" :class="{'scroll': navScroll}">
      <div class="container">
        <a class="navbar-brand logo" href="#">
        <img src="/assets/img/logo.svg">
      </a>
      <button data-toggle="collapse" class="navbar-toggler" data-target="#navbarNav"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="nav navbar-nav ml-auto">
            <li v-for="(v, i) in nav" class="nav-item nav-link nav-a">
              <a class="nav-link active" :href="v.link">{{ v.label }}</a>
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

    $(window).scroll(function() {
      const scroll = $(window).scrollTop()
      // window.console.log(this.navScroll)
      if (scroll > 100)
        this.navScroll = true
      else
        this.navScroll = false
    })


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
      ],
      navScroll: true,
    }
  },
}
</script>

<style lang="css" scoped>

</style>
