<template>
<div id="join">

  <div class="header">
    <a class="btn y-btn btn-outline-light btn-xs" href="/">
      <i class="fa fa-home mr-1"></i>
      <span>Beranda</span>
    </a>
  </div>

  <div class="body">
    <div class="brand mx-auto">
      <img src="/assets/img/logo.svg">
    </div>
    <div class="join-form">
      <form @submit.prevent="join()">
        <label for="#join" class="text-white">
          <i class="fa fa-key mr-2"></i>
          Kode Kelas
        </label>
        <div class="form-group y-form">
          <input ref="kode" type="text" class="form-control form-control-sm play-form" placeholder="Masukan Kode Kelas Kamu" name="class-code">
        </div>
        <div class="w-100 text-center">
          <button class="btn btn-warning-gradient btn-circle-sm" name="button">
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
		<p>© 2021 Yuky - ARNAV Developer.</p>
  </div>

</div>
</template>

<script>
export default {

  computed: {
    //
  },

  methods: {
    join: function() {

    }
  },

  mounted() {
    //
  },

  data() {
    return {
      //
    }
  },
}
</script>

<style lang="scss">
.n-d {
    text-decoration: none;
}
</style>
