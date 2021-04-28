<template>
<div id="waiting">

  <div class="header">
    <a class="btn y-btn btn-outline-light btn-xs" href="#">
      <i class="fa fa-check mr-2"></i>
      <span>Kamu sudah di dalam kelas!</span>
    </a>
  </div>

  <div class="body">

    <div class="avatar mt-5 flex-center">
      <div class="avatar-circle">
        <img :src="myInfo.avatar" alt="">
      </div>
    </div>

    <div class="text-center text-white mt-5 mb-4">
      <p>Halo, <b>{{myInfo.name}}</b> 👋</p>
      <h2 v-if="mySession">{{mySession.yclass.title}}</h2>
    </div>

    <div class="joined-card">
      <div class="count">
        <h3>{{totalMyFriend}} <i class="fa fa-times ml-3"></i></h3>
      </div>
      <p>teman kamu telah bergabung</p>
    </div>

  </div>

</div>
</template>

<script>
export default {

  computed: {
    myInfo: function() {
      return this.$store.state.player.myInfo
    },
    mySession: function() {
      return this.$store.state.yclass_session.mySession
    },
  },

  methods: {
    countMyFriend() {
      this.axios.get(this.API_URL + '/plays/player/countMyFriend', {
        headers: {
          Authorization: 'Bearer ' + window.$cookies.get(this.TOKEN)
        }
      }).then(res => {
        if (res.data.status) this.totalMyFriend = res.data.total
      })
    },
    addFriend() {
      this.totalMyFriend++
    },
    handleSocket() {
      this.socket.on('startGame', () => {
        this.$emit('changePage', 'Entity')
      })
      this.socket.on('addFriend', (id_player) => {
        if (this.myInfo.id !== id_player) {
          this.addFriend()
        }
      })
      this.socket.on('kick', (id_player) => {
        if (id_player == this.myInfo.id) {
          alert('Anda telah dikick oleh host.')
          this.$cookies.remove(this.TOKEN)
          this.$cookies.remove('player_session')
          this.$router.push({
            name: 'Join'
          })
        }
      })
    }
  },

  beforeMount() {
    this.countMyFriend()
  },

  mounted() {
    this.handleSocket()
  },

  data() {
    return {
      totalMyFriend: 0
    }
  },
}
</script>
