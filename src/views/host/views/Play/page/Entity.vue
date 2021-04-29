<template>
<div id="play-question">

  <nav class="navbar navbar-light navbar-expand topbar static-top">
    <div class="container-fluid">

      <div class="navbar-brand avatar-list" href="#">
        <div class="avatar-wrapper">
          <img class="rounded-circle img-fluid" src="/assets/avatars/avatar.png" alt="Avatar">
        </div>
        <div class="avatar-wrapper">
          <img class="rounded-circle img-fluid" src="/assets/avatars/avatar.png" alt="Avatar">
        </div>
        <div class="avatar-wrapper">
          <img class="rounded-circle img-fluid" src="/assets/avatars/avatar.png" alt="Avatar">
        </div>
      </div>

      <div class="more-list">
        <button class="btn btn-link rounded-circle mr-3" type="button">
          <i class="fas fa-bars"></i>
        </button>
        <span>24 Lainya</span>
      </div>

      <ul class="nav navbar-nav flex-nowrap ml-auto">
        <li class="nav-item no-arrow mx-1 mr-5">
          <div class="form-group m-0">
            <!-- <label for="font-range">14 px</label> -->
            <input type="range" class="form-control-range" id="font-range">
          </div>
        </li>
        <li class="nav-item no-arrow mx-1">
          <button class="btn br-10 shadow btn-green waves-effect waves-light" @click="nextEntity()">Selanjutnya</button>
        </li>

      </ul>
    </div>
  </nav>

  <CardQuestion v-if="entity.data.type == 'q'" :data="entity.data" />
  <CardTheory v-if="entity.data.type == 't'" />

  {{entity}}
</div>
</template>

<script>
export default {

  computed: {

    entities: function() {
      return this.$store.state.entity.myEntity["entity_" + $params.code]
    },

    runningSession: function() {
      return this.$store.state.yclass_session.runningSession
    }

  },

  methods: {

    getEntity() {
      this.entity.data = this.entities[this.entity.index]
    },

    getIndexEntity() {
      this.entity.index = this.runningSession.index_entity
    },

    handleSocket() {
      // Send entity now
      this.socket.on('reqEntity', () => {
        this.socket.emit('resEntity', this.entity.data)
      })
    },

    nextEntity() {
      this.$store.dispatch('yclass_session/nextEntity', {
        id_session: this.runningSession.id,
        nextEntity: true
      }).then(res => {
        if (res.status) {
          this.entity.index = res.index
        } else {
          if (res.errCode == 'end') {
            this.$store.dispatch('yclass_session/updateSession', {
              id: this.$cookies.get('play_session').id,
              data: {
                status: 'off'
              }
            }).then(() => {
              this.runningSession.status = 'off'
              this.$emit('changePage', 'Rank')
              this.socket.emit('rank')
            })
          }
        }
      })
    }
  },

  watch: {
    'entity.index': function(v) {
      this.getEntity()
      this.socket.emit('resEntity', this.entity.data)
    }
  },

  mounted() {
    this.handleSocket()
    this.getIndexEntity()
    this.getEntity()
  },

  data() {
    return {
      entity: {
        index: '',
        data: ''
      }
    }
  },

  components: {
    CardQuestion: require('./_components/CardQuestion').default,
    CardTheory: require('./_components/CardTheory').default,
  }
}
</script>
