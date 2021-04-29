<template>
<div id="play-rank">
  <NavRank />

  <div class="container">
    <ul class="list-group list-rank">
      <li v-for="(item, index) in [1,2,3,4,5,6]" class="list-group-item">
        <div class="player-wrapper">
          <div class="avatar-wrapper">
            <img class="rounded-circle img-fluid" src="/assets/avatars/avatar.png" alt="Avatar">
          </div>
          <div class="player-name">Dhimas Putra Hartono</div>
        </div>
        <div class="badges-score">
          1080
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

  components: {
    NavRank: require('./_components/NavRank').default
  }
}
</script>
