<template>
<div id="play-waiting">
  <div class="container-fluid">
    <div class="row">

      <div class="col">
        <div class="panel-list">
          <div class="main-title">
            Ayo Masuk ke Kelas Sekarang 🏆
          </div>
          <div class="row">

            <CardJoined v-for="(item, index) in $parent.players" :key="index" :data="item" />

          </div>
        </div>
      </div>

      <div class="col-xl-3 col-md-4">
        <div class="panel-right">
          <div class="main-title">
            <span class="weight-normal">Total : </span>
            <span>{{ $parent.players.length }}</span>
          </div>

          <div class="card y-card mb-3">
            <div class="card-body class-code">
              <div class="badge-orange-circle">
                <svg width="30" height="15" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.28708 1.92541H11.2194C11.6461 1.92541 12 2.27927 12 2.70598V4.6314C12 5.06852 11.6461 5.41197 11.2194 5.41197C10.7823 5.41197 10.4389 5.06852 10.4389 4.6314V3.48656H9.05464V4.6314C9.05464 5.06852 8.70078 5.41197 8.27407 5.41197C7.83695 5.41197 7.4935 5.06852 7.4935 4.6314V3.48656H5.28708C4.95403 4.60017 3.93408 5.41197 2.71639 5.41197C1.21769 5.41197 0 4.20468 0 2.70598C0 1.21769 1.21769 0 2.71639 0C3.93408 0 4.95403 0.811795 5.28708 1.92541ZM1.5613 2.70614C1.5613 3.341 2.08168 3.85098 2.71655 3.85098C3.341 3.85098 3.86138 3.341 3.86138 2.70614C3.86138 2.07127 3.341 1.5613 2.71655 1.5613C2.08168 1.5613 1.5613 2.07127 1.5613 2.70614Z"
                    fill="#FC622C" />
                </svg>
              </div>
              <span class="ml-3 code">{{ data.code }}</span>
            </div>
          </div>

          <div class="card y-card card-class-info">
            <div class="card-body">
              <div class="class-info mb-3">
                <div class="class-title">
                  <span>{{ data.title }}</span>
                </div>
                <div><img :src="category.image" :alt="category.name" width="20"> {{ category.name }}</div>
              </div>

              <hr>

              <div class="class-desc">
                <p>{{ data.description }}</p>
              </div>
            </div>
          </div>
          <div class="card mt-4">
            <div class="card-body">
              <button @click="startGame()" class="btn btn-block btn-lg br-10 shadow btn-blue waves-effect waves-light mb-3">
                <span>Mulai Kelas</span>
              </button>
              <button @click="deleteSession()" class="btn btn-block btn-lg br-10 shadow btn-danger waves-effect waves-light">
                <span>Batalkan </span>
              </button>
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
    data: function() {
      return this.$store.state.yclass.playClass
    },

    category: ({
      data
    }) => {
      if (data.category) return data.category
      return {}
    },

  },

  methods: {
    socketHandle() {
      this.socket.on('register', data => {
        this.$parent.players.unshift(data)
        this.socket.emit('addFriend', data.id)
      })
    },

    refreshSession() {
      this.$store.dispatch(
        'yclass_session/getSession',
        this.$cookies.get('play_session').id
      )
    },

    startGame() {
      this.$store.dispatch('yclass_session/updateSession', {
        id: this.$cookies.get('play_session').id,
        data: {
          status: 'on_mode_open'
        }
      }).then(() => {
          this.refreshSession()
          this.$parent.changePage('Timer')
        })
    },

    deleteSession() {
      this.$store.dispatch('yclass_session/deleteSession', this.$cookies.get('play_session').id).then((data) => {
        if (data.status) {
          this.$router.push({
            name: 'ClassList'
          })
        }
      })

    }
  },

  mounted() {
    this.socketHandle()
  },

  data() {
    return {
      //
    }
  },

  components: {
    CardJoined: require('./_components/CardJoined').default
  }
}
</script>
