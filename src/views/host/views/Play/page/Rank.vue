<template>
<div id="play-rank">
  <NavRank />

  <div class="container">
    <ul class="list-group list-rank">
      <li v-for="(item, index) in leaderboards" class="list-group-item">
        <div class="rank-number">
          <span>{{index+1}}</span>
        </div>
        <div class="medal">
          <img v-if="index+1 == 1" src="/assets/img/medal-1.png" alt="1">
          <img v-if="index+1 == 2" src="/assets/img/medal-2.png" alt="2">
          <img v-if="index+1 == 3" src="/assets/img/medal-3.png" alt="3">
        </div>
        <div class="player-wrapper">
          <div class="avatar-wrapper">
            <img class="rounded-circle img-fluid" :src="item.avatar" alt="Avatar">
          </div>
          <div class="player-name">{{item.name}}</div>
        </div>
        <div class="badges-score">
          {{item.score}}
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {

  computed: {
    //
  },

  methods: {
    getLeaderboards() {
      this.$store.dispatch('player/getPlayersLeaderboard', this.$parent.runningSession.id).then(data => {
        this.leaderboards = data
      })
    }
  },

  beforeMount() {
    this.getLeaderboards()
  },

  mounted() {
    //
  },

  data() {
    return {
      leaderboards: []
    }
  },

  components: {
    NavRank: require('./_components/NavRank').default
  }
}
</script>
