<template>
<div id="card-question">

  <NavEntity :data="data" />

  <div class="entity-wrapper question-wrapper">

    <div v-if="data.data.media.type" class="entity-media mt-3">
      <div class="e-media-wrapper">

        <div v-if="data.data.media.type == 'image'">
          <img :src="data.data.media.path" alt="Yuky media">
        </div>

        <div v-if="data.data.media.type == 'audio'">
          <audio controls>
            <source :src="data.data.media.path" type="audio/mp3">
            Your browser does not support the audio element.
          </audio>
        </div>

        <div v-if="data.data.media.type == 'video'">
          <video controls>
            <source :src="data.data.media.path" type="video/mp4">
            Your browser does not support HTML video.
          </video>
        </div>

      </div>
    </div>

    <div v-html="data.data.question" class="entity-question container">
    </div>

    <div class="answer-body">
      <div class="row">
        <div v-for="(item, index) in data.data.answer" class="col-xl-4 col-lg-6">
          <div class="answer" :class="isAnswered(data.data.id) && data.data.answer[index].correct ? 'correct-answer' : false">
            <button class="btn btn-sm">
              {{ item.label }}
            </button>
            <span>{{ item.value }}</span>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="counter" v-if="counter.status">
    {{counter.number}}
  </div>

  <div class="answered">
    <div class="answered-list">
      <div v-for="(item, index) in playerAnswer" :key="index" class="player-list avatar-circle">
        <img :src="item.avatar" :alt="item.name">
      </div>
    </div>
    <div class="answered-count">
      <button class="btn btn-light">
        {{playerAnswer.length}}
      </button>
    </div>
  </div>

  <div class="modal modal-score fade" data-keyboard="false" data-backdrop="static" id="leaderboards" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-body px-0">

          <div class="row">

            <div class="col-sm-12 header">
              <div class="label-correct-answer">
                <span>Jawaban : </span>
                <div class="badge-green">
                  {{
                      data.data.answer.find(function(x){
                        return x.correct == true
                      }).label
                    }}.
                  {{
                      data.data.answer.find(function(x){
                        return x.correct == true
                      }).value
                    }}
                </div>
              </div>
              <div class="modal-close">
                <button type="button" class="btn btn-danger shadow waves-effect waves-light" @click="closeLeaderboardsModal()">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9973 2.00586L2.00977 13.9933" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.0004 14L2.00293 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="col-sm-12 title">
              <div class="badge-secondary">
                <span>Hasil Skor Sementara</span>
                <svg width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                    <g filter="url(#filter0_ii)">
                      <path
                        d="M10.3199 0.439372C10.5929 0.0655274 11.0783 -0.0907685 11.5209 0.0526653L15.1554 1.23049C15.3718 1.30061 15.6051 1.30061 15.8215 1.23049L19.456 0.0526646C19.8986 -0.0907692 20.384 0.0655267 20.657 0.439372L22.8988 3.50924C23.0323 3.69202 23.221 3.82788 23.4377 3.89718L27.0767 5.06129C27.5199 5.20307 27.8199 5.61226 27.819 6.07369L27.8117 9.86303C27.8112 10.0886 27.8834 10.3085 28.0175 10.4908L30.2711 13.5521C30.5455 13.925 30.5455 14.4307 30.2711 14.8035L28.0175 17.8649C27.8834 18.0472 27.8112 18.2671 27.8117 18.4927L27.819 22.282C27.8199 22.7434 27.5199 23.1526 27.0767 23.2944L23.4377 24.4585C23.221 24.5278 23.0323 24.6637 22.8988 24.8465L20.657 27.9163C20.384 28.2901 19.8986 28.4465 19.456 28.303L15.8215 27.1252C15.6051 27.0551 15.3718 27.0551 15.1554 27.1252L11.5209 28.303C11.0783 28.4465 10.5929 28.2901 10.3199 27.9163L8.07807 24.8465C7.94461 24.6637 7.75589 24.5278 7.53921 24.4585L3.9002 23.2944C3.45704 23.1526 3.15703 22.7434 3.15792 22.282L3.1652 18.4927C3.16563 18.2671 3.09354 18.0472 2.95937 17.8649L0.705825 14.8035C0.431392 14.4307 0.431391 13.925 0.705825 13.5521L2.95937 10.4908C3.09354 10.3085 3.16563 10.0886 3.1652 9.86303L3.15791 6.07372C3.15703 5.61226 3.45704 5.20307 3.90019 5.06129L7.53921 3.89718C7.75589 3.82788 7.94461 3.69202 8.07807 3.50924L10.3199 0.439372Z"
                        fill="url(#paint0_linear)" />
                    </g>
                    <path d="M15.5664 25.4035C21.7796 25.4035 26.8164 20.4123 26.8164 14.2553C26.8164 8.09837 21.7796 3.10718 15.5664 3.10718C9.3532 3.10718 4.31641 8.09837 4.31641 14.2553C4.31641 20.4123 9.3532 25.4035 15.5664 25.4035Z"
                      fill="#F8B146" stroke="url(#paint1_linear)" stroke-width="3" />
                    <g filter="url(#filter1_ii)">
                      <path d="M15.567 23.457C20.6953 23.457 24.8527 19.3373 24.8527 14.2554C24.8527 9.17343 20.6953 5.05371 15.567 5.05371C10.4386 5.05371 6.28125 9.17343 6.28125 14.2554C6.28125 19.3373 10.4386 23.457 15.567 23.457Z"
                        fill="url(#paint2_linear)" />
                    </g>
                    <g filter="url(#filter2_i)">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M15.8031 8.84766H15.3068L15.025 8.96264L14.8964 9.00943L14.7995 9.06542C14.7093 9.11758 14.6214 9.18026 14.5389 9.25423L14.4999 9.28431L14.4516 9.33035C14.3102 9.46533 14.2012 9.61663 14.1207 9.77009L14.1132 9.78442L13.3581 11.3186L11.6265 11.5675L11.619 11.5687C10.9768 11.6688 10.446 12.1132 10.2368 12.7199C10.018 13.3498 10.1878 14.0459 10.6682 14.5078L11.9034 15.6942L11.5982 17.366L11.5964 17.3768C11.4444 18.301 12.0633 19.1776 12.9926 19.3518L13.0099 19.3551L13.0273 19.3578C13.3959 19.4165 13.7712 19.3575 14.1008 19.1935L14.1105 19.1886L15.6274 18.401L17.1638 19.1951C17.7431 19.4989 18.4503 19.456 18.9891 19.0737C19.5371 18.6908 19.8142 18.027 19.6948 17.3697L19.3934 15.7166L20.6667 14.5223L20.6693 14.5199C21.1571 14.0645 21.3371 13.3705 21.1283 12.7373L21.1246 12.7261L21.1207 12.715C20.9061 12.103 20.3646 11.6589 19.7152 11.5663L19.7135 11.566L18.0117 11.3214L17.2452 9.79128L17.2409 9.78304C16.9698 9.26141 16.4523 8.9144 15.8683 8.85438L15.8031 8.84766Z"
                        fill="#FAD562" />
                    </g>
                    <g filter="url(#filter3_d)">
                      <path
                        d="M18.2036 15.1021C18.0931 15.2083 18.0424 15.3617 18.0675 15.5122L18.4468 17.5923C18.4788 17.7685 18.4037 17.9469 18.2548 18.0488C18.1089 18.1545 17.9148 18.1672 17.7557 18.0827L15.8661 17.1061C15.8004 17.0714 15.7275 17.0528 15.6528 17.0507H15.5372C15.4971 17.0566 15.4578 17.0693 15.422 17.0887L13.532 18.07C13.4386 18.1165 13.3328 18.133 13.2291 18.1165C12.9765 18.0691 12.808 17.8307 12.8494 17.5791L13.2291 15.4991C13.2543 15.3473 13.2035 15.193 13.093 15.0852L11.5524 13.6055C11.4236 13.4816 11.3788 13.2956 11.4377 13.1278C11.4948 12.9604 11.6407 12.8382 11.8169 12.8107L13.9373 12.5059C14.0986 12.4894 14.2402 12.3922 14.3127 12.2484L15.2471 10.3502C15.2692 10.3079 15.2978 10.269 15.3324 10.236L15.3708 10.2064C15.3908 10.1844 15.4139 10.1663 15.4395 10.1515L15.486 10.1346L15.5585 10.105H15.7381C15.8985 10.1214 16.0397 10.2166 16.1136 10.3586L17.0603 12.2484C17.1285 12.3867 17.2612 12.4826 17.4144 12.5059L19.5347 12.8107C19.7139 12.8361 19.8637 12.9587 19.923 13.1278C19.9788 13.2973 19.9307 13.4833 19.7992 13.6055L18.2036 15.1021Z"
                        fill="#FFFEEA" />
                    </g>
                  </g>
                  <defs>
                    <filter id="filter0_ii" x="0.5" y="-1" width="29.9769" height="30.3557" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
                    <filter id="filter1_ii" x="5.28125" y="4.05371" width="20.5714" height="20.4033" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
                    <filter id="filter2_i" x="10.1426" y="8.84766" width="11.5714" height="11.0477" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dx="0.5" dy="0.5" />
                      <feGaussianBlur stdDeviation="0.5" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                    </filter>
                    <filter id="filter3_d" x="9.91211" y="8.60498" width="12.5338" height="12.0332" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="0.5" dy="0.5" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                    </filter>
                    <linearGradient id="paint0_linear" x1="7.88804" y1="3.2841" x2="23.9508" y2="24.6593" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FFF5D2" />
                      <stop offset="1" stop-color="#FFB321" />
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="8.78069" y1="4.87673" x2="22.7211" y2="24.1087" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FFC141" />
                      <stop offset="1" stop-color="#FBEAAF" stop-opacity="0.45" />
                    </linearGradient>
                    <linearGradient id="paint2_linear" x1="10.567" y1="7.17717" x2="21.336" y2="21.2513" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FEE79E" />
                      <stop offset="1" stop-color="#FFDF79" />
                    </linearGradient>
                    <clipPath id="clip0">
                      <rect width="30" height="28.6667" fill="white" transform="translate(0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <div class="col-sm-6 answer-player">
              <button class="btn btn-green shadow btn-block btn-lg waves-effect waves-light">
                <span>Benar</span>
                <div class="badge-white-circle">
                  {{ leaderboards.correct.length }}
                </div>
              </button>

              <div class="answer-player-list">
                <ul class="list-group">
                  <li v-for="(item, index) in leaderboards.correct" class="list-group-item">
                    <div class="player-info">
                      <img class="avatar" :src="item.player_info.avatar" :alt="item.player_info.name" alt="avatar">
                      <div class="player-name">
                        {{item.player_info.name}}
                      </div>
                    </div>
                    <div class="score score-green">
                      + {{item.score}}
                    </div>
                  </li>
                  <li v-if="!leaderboards.correct.length" class="text-center mt-5">
                    <h1>😭</h1>
                    <h4>Tidak ada yang benar.</h4>
                  </li>
                </ul>
              </div>

            </div>

            <div class="col-sm-6 answer-player">
              <button class="btn btn-danger shadow btn-block btn-lg waves-effect waves-light">
                <span>Salah</span>
                <div class="badge-white-circle">
                  {{ leaderboards.wrong.length }}
                </div>
              </button>

              <div class="answer-player-list">
                <ul class="list-group">
                  <li v-for="(item, index) in leaderboards.wrong" class="list-group-item">
                    <div class="player-info">
                      <img class="avatar" :src="item.player_info.avatar" :alt="item.player_info.name" alt="avatar">
                      <div class="player-name">
                        {{item.player_info.name}}
                      </div>
                    </div>
                    <div class="score score-red">
                      + 0
                    </div>
                  </li>
                  <li v-if="!leaderboards.wrong.length" class="text-center mt-5">
                    <h1>😁🎉</h1>
                    <h4>Tidak ada yang salah.</h4>
                  </li>
                </ul>
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
export default {

  computed: {
    //
  },

  watch: {
    '$parent.entity.index': function() {
      this.checkPlayerAnswer()
    }
  },

  methods: {
    checkAnswer() {
      this.$store.dispatch('yclass_session/updateAnsweredEntity', {
        id: this.$parent.$parent.runningSession.id,
        answered_entity: this.$parent.entity.data.id
      }).then(data => {
        this.$parent.entity.answered_entity = data.answered_entity
        this.leaderboards.isChecking = false
      })
      this.getScore('save')
      this.socket.emit('checkAnswer')

      this.counter.status = false
      this.counter.number = 3
    },

    checkScore() {
      this.openLeaderboardsModal()
    },

    getScore(cb = '') {
      this.$store.dispatch('player_answer/getAnswerByEntityAndSession', {
        entity: this.data.data.id,
        session: this.$parent.$parent.sessionInfo.id
      }).then(data => {
        this.leaderboards.correct = []
        this.leaderboards.wrong = []
        data.map(x => {
          if (x.correct)
            this.leaderboards.correct.push(x)
          else
            this.leaderboards.wrong.push(x)
        })
        if (cb == 'save') {
          this.saveScore(this.leaderboards.correct)
        }
      })
    },

    closeLeaderboardsModal() {
      $("#leaderboards").modal("hide")
    },

    isAnswered(val) {
      return this.$parent.entity.answered_entity.includes(val)
    },

    saveScore(correct) {
      for (var val of correct) {
        this.$store.dispatch('player/addScore', {
          id: val.player,
          data: {
            score: val.score
          }
        })
      }
    },

    countBeforeCheck() {
      this.counter.status = true
      this.leaderboards.isChecking = true
      var interval = setInterval(function() {
        this.counter.number--
        if (this.counter.number == 0) {
          this.checkAnswer()
          clearInterval(interval)
        }
      }.bind(this), 1000)
    },

    openLeaderboardsModal() {
      $("#leaderboards").modal("show")
    },

    handleSocket() {
      // Get who already answering
      this.socket.on('reqAnswer', (id) => {
        let playerAnswer = this.$parent.$parent.players.find(function(x) {
          return x.id == id
        });
        this.playerAnswer.unshift(playerAnswer)
      })

      // Get who cancel answer
      this.socket.on('cancelAnswer', (id) => {
        let playerAnswer = this.playerAnswer.findIndex(function(x) {
          return x.id == id
        });
        this.playerAnswer.splice(playerAnswer, 1)
      })
    },

    checkPlayerAnswer() {
      this.playerAnswer = []
      this.$store.dispatch('player_answer/getPlayerByEntity', {
        entity: this.$parent.entity.data.id,
        session: this.$parent.$parent.sessionInfo.id
      }).then(data => {
        for (var v of data) {
          let playerAnswer = this.$parent.$parent.players.find(function(x) {
            return x.id == v.player
          });
          this.playerAnswer.push(playerAnswer)
        }
      })
    }
  },

  beforeMount() {},

  mounted() {
    this.handleSocket()
    this.checkPlayerAnswer()
    this.getScore()
  },

  data() {
    return {
      data: this.$parent.entity,
      counter: {
        status: false,
        number: 3
      },
      leaderboards: {
        isChecking: false,
        correct: [],
        wrong: []
      },
      playerAnswer: []
    }
  },

  components: {
    NavEntity: require('./NavEntity').default,
  }
}
</script>

<style scoped>
.counter {
  position: fixed;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  font-size: 180px;
  padding: 20% 0 0 0;
  text-align: center;
  color: #FFF;
}
</style>
