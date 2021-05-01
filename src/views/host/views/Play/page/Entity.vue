<template>
<div id="play-entity">

  <CardQuestion v-if="entity.data.type == 'q'" />
  <CardTheory v-if="entity.data.type == 't'" />

  {{entity}}
  <hr>
</div>
</template>

<script>
export default {

  computed: {

    entities: function() {
      return this.$store.state.entity.myEntity["entity_" + $params.code]
    },

  },

  methods: {

    getEntity() {
      this.entity.data = this.entities[this.entity.index]
    },

    getIndexEntity() {
      this.entity.index = this.$parent.runningSession.index_entity
      this.entity.answered_entity = JSON.parse(this.$parent.runningSession.answered_entity)
    },

    handleSocket() {
      // Send entity now
      this.socket.on('reqEntity', () => {
        this.socket.emit('resEntity', this.entity)
      })

    },

    nextEntity() {
      let nextEntity = this.entity.index + 1
      if (nextEntity < this.entities.length) {
        this.entity.index = this.entity.index + 1
      }
      else {
        this.$store.dispatch('yclass_session/updateSession', {
          id: this.$cookies.get('play_session').id,
          data: {
            status: 'off'
          }
        }).then(() => {
          this.socket.emit('rank')
          this.$parent.runningSession.status = 'off'
          this.$parent.page = 'Rank'
        })
      }
      this.$store.dispatch('yclass_session/nextEntity', {
        id_session: this.$parent.runningSession.id,
        nextEntity: this.entity.index
      }).then(res => {
        this.entity.answered_entity = JSON.parse(res.answered_entity)
      })
    },

    previousEntity() {
      this.entity.index = this.entity.index - 1
      this.$store.dispatch('yclass_session/nextEntity', {
        id_session: this.$parent.runningSession.id,
        nextEntity: this.entity.index
      }).then(res => {
        this.entity.answered_entity = JSON.parse(res.answered_entity)
      })
    },

    goToEntity(index) {
      this.$store.dispatch('yclass_session/nextEntity', {
        id_session: this.$parent.runningSession.id,
        nextEntity: index
      }).then(res => {
        this.entity.answered_entity = JSON.parse(res.answered_entity)
      })
    },

    updateSession(res) {
      if (res.status) {
      }
    },
  },

  watch: {
    'entity.index': function(v) {
      this.getEntity()
      this.socket.emit('resEntity', this.entity)
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
        answered_entity: [],
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
