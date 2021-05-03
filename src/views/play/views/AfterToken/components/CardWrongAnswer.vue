<template>
<div id="card-select" class="text-center text-white card-answer-result">
  <div class="container">
    <div class="badge-wrapper">
      <div class="badge-circle badge-red">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.9919 3.00745L3.00854 18.9908" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M18.9967 19L3 3" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
    <div class="play-card text-dark">
      <div class="character">
        <svg width="204" height="214" viewBox="0 0 204 214" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g filter="url(#filter0_d)">
            <rect x="30" width="144" height="144" fill="url(#pattern0)" />
          </g>
          <defs>
            <filter id="filter0_d" x="0" y="0" width="204" height="214" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="40" />
              <feGaussianBlur stdDeviation="15" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0" transform="scale(0.0138889)" />
            </pattern>
            <image id="image0" width="72" height="72"
              xlink:href="data:image/png;base64,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" />
          </defs>
        </svg>
      </div>
      <h1>Yaah</h1>
      <p>Jawaban Kamu Belum Benar</p>
    </div>
  </div>
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

  beforeMount() {
    this.$parent.sound.wrongAnswer.play()
  },

  mounted() {
    //
  },

  data() {
    return {
      //
    }
  },

  components: {}
}
</script>
