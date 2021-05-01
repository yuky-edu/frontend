<template>
<div id="join">

  <div class="header">
    <a class="btn y-btn btn-outline-light btn-xs" href="/">
      <i class="fa fa-home mr-1"></i>
      <span>Beranda</span>
    </a>
  </div>

  <div class="body play-container input-focus">
    <div class="brand mx-auto">
      <img src="/assets/img/logo.svg">
    </div>
    <div class="join-form">
      <form @submit.prevent="joinClass()">
        <label for="#join" class="text-white">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12.2506 2.06256H5.74887C3.48312 2.06256 2.06262 3.66681 2.06262 5.93706V12.0631C2.06262 14.3333 3.47637 15.9376 5.74887 15.9376H12.2499C14.5231 15.9376 15.9376 14.3333 15.9376 12.0631V5.93706C15.9376 3.66681 14.5231 2.06256 12.2506 2.06256Z"
              stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M8.01689 9.00005C8.01689 9.7673 7.39514 10.3891 6.62789 10.3891C5.86064 10.3891 5.23889 9.7673 5.23889 9.00005C5.23889 8.2328 5.86064 7.61105 6.62789 7.61105H6.63014C7.39589 7.6118 8.01689 8.23355 8.01689 9.00005Z" stroke="white"
              stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.01904 9.00006H12.7575V10.3891" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.6364 10.3891V9.00014" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Kode Kelas
        </label>

        <div class="form-group y-form">
          <input autocomplete="off" v-model="code" ref="kode" type="text" class="form-control form-control-sm play-form" placeholder="Masukan kode kelas" name="class-code">
        </div>

        <div class="w-100 text-center">
          <button class="btn rounded-circle btn-play warning-gradient btn-circle-sm" name="button">
            <svg width="49" height="56" viewBox="0 0 49 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d)">
                <path
                  d="M39.875 31.5723C39.7344 31.7667 39.0781 32.593 38.5625 33.1276L38.2812 33.4192C34.3438 37.842 24.5469 44.5006 19.5781 46.6391C19.5781 46.6877 16.625 47.9514 15.2187 48H15.0312C12.875 48 10.8594 46.7363 9.82812 44.695C9.26562 43.5772 8.75 40.3208 8.70312 40.2722C8.28125 37.356 8 32.8894 8 27.9757C8 22.8238 8.28125 18.158 8.79687 15.2904C8.79687 15.2418 9.3125 12.6173 9.64062 11.7424C10.1562 10.4787 11.0938 9.40948 12.2656 8.72904C13.2031 8.24301 14.1875 8 15.2187 8C16.2969 8.0486 18.3125 8.7825 19.1094 9.11786C24.3594 11.2564 34.3906 18.2552 38.2344 22.5322C38.8906 23.2126 39.5938 24.0389 39.7812 24.2333C40.5781 25.3026 41 26.6148 41 28.0292C41 29.288 40.625 30.5516 39.875 31.5723Z"
                  fill="white" />
              </g>
              <defs>
                <filter id="filter0_d" x="0" y="0" width="49" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="4" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
              </defs>
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>

  <div class="footer">
    <p class="m-0">© 2021 Yuky - ARNAV Developer.</p>
  </div>

</div>
</template>

<script>
export default {

  computed: {
    //
  },

  methods: {
    joinClass: function() {
      this.$store.dispatch('player/joinClass', {
        code: this.code
      }).then(response => {
        if (response.status) {
          this.$cookies.set('player_session', {
            ws_channel: response.data.yclass.last_session.ws_channel,
            id_session: response.data.yclass.last_session.id,
          }, '1d')


          this.$router.push({
            name: 'Profile',
            params: {
              code: response.data.yclass.code
            }
          })
        } else if (response.errCode == 'notFound') {
          alert('Kelas tidak tersedia')
        } else if (response.errCode == 'off') {
          alert('Kelas tidak dibuka')
        } else if (response.errCode == 'block') {
          alert('Akses masuk ditutup')
        }

      })
    },

  },

  mounted() {
    //
  },

  data() {
    return {
      code: this.$route.query.code ? this.$route.query.code : ''
    }
  },
}
</script>

<style lang="scss">
.n-d {
    text-decoration: none;
}
</style>
