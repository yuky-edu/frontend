<template>
<div id="score" v-if="data">

  <div class="container">

    <div class="header text-center">
      <div class="hallo">Halo 👋</div>
      <div class="player-name">
        {{ $parent.myInfo.name }}
      </div>
    </div>

    <div class="avatar-wrapper">
      <div class="avatar-circle">
        <img :src="$parent.myInfo.avatar" alt="Avatar">
      </div>
    </div>

    <div class="card card-score">
      <div class="card-body">
        <span>Total Skor kamu Adalah </span>
        <div class="total-score">
          <span>1080</span>
          <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <g filter="url(#filter0_ii)">
                <path
                  d="M9.81986 0.439372C10.0929 0.0655274 10.5783 -0.0907685 11.0209 0.0526653L14.6554 1.23049C14.8718 1.30061 15.1051 1.30061 15.3215 1.23049L18.956 0.0526646C19.3986 -0.0907692 19.884 0.0655267 20.157 0.439372L22.3988 3.50924C22.5323 3.69202 22.721 3.82788 22.9377 3.89718L26.5767 5.06129C27.0199 5.20307 27.3199 5.61226 27.319 6.07369L27.3117 9.86303C27.3112 10.0886 27.3834 10.3085 27.5175 10.4908L29.7711 13.5521C30.0455 13.925 30.0455 14.4307 29.7711 14.8035L27.5175 17.8649C27.3834 18.0472 27.3112 18.2671 27.3117 18.4927L27.319 22.282C27.3199 22.7434 27.0199 23.1526 26.5767 23.2944L22.9377 24.4585C22.721 24.5278 22.5323 24.6637 22.3988 24.8465L20.157 27.9163C19.884 28.2901 19.3986 28.4465 18.956 28.303L15.3215 27.1252C15.1051 27.0551 14.8718 27.0551 14.6554 27.1252L11.0209 28.303C10.5783 28.4465 10.0929 28.2901 9.81986 27.9163L7.57807 24.8465C7.44461 24.6637 7.25589 24.5278 7.03921 24.4585L3.4002 23.2944C2.95704 23.1526 2.65703 22.7434 2.65792 22.282L2.6652 18.4927C2.66563 18.2671 2.59354 18.0472 2.45937 17.8649L0.205825 14.8035C-0.0686082 14.4307 -0.0686086 13.925 0.205825 13.5521L2.45937 10.4908C2.59354 10.3085 2.66563 10.0886 2.6652 9.86303L2.65791 6.07372C2.65703 5.61226 2.95704 5.20307 3.40019 5.06129L7.03921 3.89718C7.25589 3.82788 7.44461 3.69202 7.57807 3.50924L9.81986 0.439372Z"
                  fill="url(#paint0_linear)" />
              </g>
              <path d="M15.0666 25.4035C21.2799 25.4035 26.3166 20.4123 26.3166 14.2553C26.3166 8.09837 21.2799 3.10718 15.0666 3.10718C8.85345 3.10718 3.81665 8.09837 3.81665 14.2553C3.81665 20.4123 8.85345 25.4035 15.0666 25.4035Z" fill="#F8B146"
                stroke="url(#paint1_linear)" stroke-width="3" />
              <g filter="url(#filter1_ii)">
                <path d="M15.0665 23.4569C20.1948 23.4569 24.3522 19.3372 24.3522 14.2553C24.3522 9.17337 20.1948 5.05365 15.0665 5.05365C9.93812 5.05365 5.78076 9.17337 5.78076 14.2553C5.78076 19.3372 9.93812 23.4569 15.0665 23.4569Z"
                  fill="url(#paint2_linear)" />
              </g>
              <g filter="url(#filter2_i)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M15.3033 8.84772H14.807L14.5253 8.9627L14.3966 9.00949L14.2997 9.06548C14.2095 9.11764 14.1217 9.18032 14.0392 9.25429L14.0001 9.28437L13.9519 9.33041C13.8104 9.4654 13.7015 9.61669 13.6209 9.77015L13.6134 9.78448L12.8583 11.3186L11.1268 11.5676L11.1192 11.5687C10.4771 11.6689 9.94622 12.1133 9.73705 12.7199C9.51822 13.3499 9.68805 14.046 10.1685 14.5079L11.4037 15.6943L11.0985 17.3661L11.0967 17.3769C10.9447 18.301 11.5636 19.1777 12.4928 19.3519L12.5102 19.3551L12.5276 19.3579C12.8962 19.4165 13.2714 19.3576 13.601 19.1935L13.6107 19.1887L15.1277 18.4011L16.664 19.1951C17.2433 19.4989 17.9505 19.4561 18.4893 19.0738C19.0374 18.6908 19.3144 18.0271 19.1951 17.3697L18.8937 15.7167L20.1669 14.5224L20.1695 14.52C20.6573 14.0646 20.8373 13.3706 20.6285 12.7374L20.6249 12.7262L20.621 12.7151C20.4064 12.1031 19.8649 11.6589 19.2154 11.5663L19.2137 11.5661L17.5119 11.3214L16.7454 9.79135L16.7411 9.7831C16.4701 9.26147 15.9525 8.91446 15.3686 8.85444L15.3033 8.84772Z"
                  fill="#FAD562" />
              </g>
              <g filter="url(#filter3_d)">
                <path
                  d="M17.7034 15.1022C17.5929 15.2083 17.5421 15.3618 17.5673 15.5123L17.9466 17.5923C17.9786 17.7686 17.9035 17.947 17.7546 18.0489C17.6087 18.1546 17.4146 18.1673 17.2554 18.0827L15.3658 17.1061C15.3002 17.0715 15.2272 17.0529 15.1526 17.0507H15.0369C14.9968 17.0566 14.9576 17.0693 14.9217 17.0888L13.0317 18.07C12.9383 18.1165 12.8325 18.133 12.7289 18.1165C12.4763 18.0692 12.3077 17.8307 12.3491 17.5792L12.7289 15.4992C12.754 15.3474 12.7032 15.1931 12.5927 15.0853L11.0522 13.6056C10.9233 13.4817 10.8785 13.2957 10.9374 13.1279C10.9946 12.9604 11.1405 12.8382 11.3167 12.8108L13.4371 12.5059C13.5983 12.4895 13.74 12.3922 13.8125 12.2485L14.7468 10.3502C14.769 10.3079 14.7976 10.269 14.8321 10.2361L14.8705 10.2065C14.8906 10.1845 14.9136 10.1663 14.9392 10.1515L14.9857 10.1346L15.0583 10.105H15.2379C15.3983 10.1215 15.5395 10.2166 15.6133 10.3587L16.56 12.2485C16.6283 12.3867 16.761 12.4827 16.9141 12.5059L19.0345 12.8108C19.2137 12.8361 19.3634 12.9587 19.4227 13.1279C19.4786 13.2974 19.4304 13.4834 19.299 13.6056L17.7034 15.1022Z"
                  fill="#FFFEEA" />
              </g>
            </g>
            <defs>
              <filter id="filter0_ii" x="0" y="-1" width="29.9769" height="30.3557" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="-1" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.558333 0 0 0 0 0.29448 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
              </filter>
              <filter id="filter1_ii" x="4.78076" y="4.05365" width="20.5714" height="20.4033" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="1" dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-1" dy="-1" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.8125 0 0 0 0 0.521717 0 0 0 0 0.186198 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
              </filter>
              <filter id="filter2_i" x="9.64282" y="8.84772" width="11.5714" height="11.0477" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="0.5" dy="0.5" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
              </filter>
              <filter id="filter3_d" x="9.41187" y="8.60504" width="12.5338" height="12.0332" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="0.5" dy="0.5" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
              </filter>
              <linearGradient id="paint0_linear" x1="7.38804" y1="3.2841" x2="23.4508" y2="24.6593" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFF5D2" />
                <stop offset="1" stop-color="#FFB321" />
              </linearGradient>
              <linearGradient id="paint1_linear" x1="8.28094" y1="4.87673" x2="22.2214" y2="24.1087" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFC141" />
                <stop offset="1" stop-color="#FBEAAF" stop-opacity="0.45" />
              </linearGradient>
              <linearGradient id="paint2_linear" x1="10.0665" y1="7.17711" x2="20.8355" y2="21.2513" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FEE79E" />
                <stop offset="1" stop-color="#FFDF79" />
              </linearGradient>
              <clipPath id="clip0">
                <rect width="30" height="28.6667" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <span>Kamu Dapat Peringkat Ke : <strong>3</strong></span>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="card card-shadow card-correct">
          <div class="counter">
            <div class="number-count">
              {{
                data.filter(function(x) {
                  return x.correct == true
                }).length
              }}
            </div>
            <div class="badge-circle badge-green">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.5638 2.39815L6.10486 9.45028C5.83791 9.70267 5.49244 9.82145 5.13127 9.82145C4.78581 9.82145 4.44034 9.70267 4.17339 9.45028L0.436071 5.93164C-0.0978311 5.41201 -0.0978311 4.59545 0.436071 4.09066C0.969974 3.58588 1.84934 3.58588 2.38324 4.09066L5.13127 6.68882L11.6166 0.557177C12.1505 0.0523929 13.0299 0.0523929 13.5638 0.557177C14.0977 1.07681 14.0977 1.89337 13.5638 2.39815Z"
                  fill="white" />
              </svg>
            </div>
          </div>
          <span>Jawaban Benar</span>
        </div>
      </div>
      <div class="col-6">
        <div class="card card-shadow card-wrong">
          <div class="counter">
            <div class="number-count">
              {{
                data.filter(function(x) {
                  return x.correct == false
                }).length
              }}
            </div>
            <div class="badge-circle badge-red">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.5638 2.39815L6.10486 9.45028C5.83791 9.70267 5.49244 9.82145 5.13127 9.82145C4.78581 9.82145 4.44034 9.70267 4.17339 9.45028L0.436071 5.93164C-0.0978311 5.41201 -0.0978311 4.59545 0.436071 4.09066C0.969974 3.58588 1.84934 3.58588 2.38324 4.09066L5.13127 6.68882L11.6166 0.557177C12.1505 0.0523929 13.0299 0.0523929 13.5638 0.557177C14.0977 1.07681 14.0977 1.89337 13.5638 2.39815Z"
                  fill="white" />
              </svg>
            </div>
          </div>
          <span>Jabawan Salah</span>
        </div>
      </div>
    </div>

    <div class="action">
      <button class="btn btn-block shadow btn-yellow waves-effect waves-light btn-lg">Selesai</button>
      <button class="btn btn-block shadow btn-green waves-effect waves-light btn-lg">Bagikan</button>
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
    getMyAnswer() {
      this.$store.dispatch('player_answer/getMyAnswerBySession', this.$parent.sessionInfo.id).then(data => {
        this.data = data.data
      })
    },
    refreshMyInfo() {
      this.$store.dispatch('player/getMyInfo')
    }
  },

  beforeMount() {
    this.refreshMyInfo()
    this.getMyAnswer()
  },

  mounted() {
    //
  },

  data() {
    return {
      data: ''
    }
  },
}
</script>
