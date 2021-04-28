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
          <button class="btn br-10 shadow btn-green waves-effect waves-light">Selesai</button>
        </li>

      </ul>
    </div>
  </nav>

  <div class="q-card">
    <div class="q-body">
      <div class="q-media">
        <div class="q-media-wrapper">
          <img src="/assets/img/images-media1.png" alt="Yuky media">
        </div>
      </div>
      <div class="q-text container">
        Dari Gambar Diatas Jelaskan Apa Perbedaan Reboisasi dan Konspirasi ?
      </div>
    </div>
    <div class="answer-body">
      <div class="row">
        <div class="col-sm-4">
          <div class="answer">
            <button class="btn btn-sm">
              A
            </button>
            <span>Pengikisan</span>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="answer">
            <button class="btn btn-sm">
              A
            </button>
            <span>Pengikisan</span>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="answer">
            <button class="btn btn-sm">
              A
            </button>
            <span>Pengikisan</span>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="answer">
            <button class="btn btn-sm">
              Z
            </button>
            <span>Pengikisan</span>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="answer">
            <button class="btn btn-sm">
              A
            </button>
            <span>Pengikisan</span>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="answer">
            <button class="btn btn-sm">
              A
            </button>
            <span>Pengikisan</span>
          </div>
        </div>
      </div>
    </div>
  </div>
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
    }
  },

  watch: {
    'entity.index': function(v) {
      this.getEntity()
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
}
</script>
