<template>
<div id="play-entity">

  <CardQuestion v-if="entity.data.type == 'q'" />
  <CardTheory v-if="entity.data.type == 't'" />

  {{entity}}
  <hr>
  {{playerAnswer}}
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
        this.socket.emit('resEntity', this.entity.data)
      })

      // Get who already answering
      this.socket.on('reqAnswer', (id) => {
        let playerAnswer = this.$parent.players.find(function(x) {
          return x.id == id
        });
        this.playerAnswer.push(playerAnswer)
      })

      // Get who cancel answer
      this.socket.on('cancelAnswer', (id) => {
        let playerAnswer = this.$parent.players.findIndex(function(x) {
          return x.id == id
        });
        this.playerAnswer.splice(playerAnswer, 1)
      })
    },

    nextEntity() {
      this.$store.dispatch('yclass_session/nextEntity', {
        id_session: this.$parent.runningSession.id,
        nextEntity: true
      }).then(res => {
        this.updateSession(res)
      })
    },

    previousEntity() {
      this.$store.dispatch('yclass_session/nextEntity', {
        id_session: this.$parent.runningSession.id,
        nextEntity: this.entity.index - 1
      }).then(res => {
        this.updateSession(res)
      })
    },

    goToEntity(index) {
      this.$store.dispatch('yclass_session/nextEntity', {
        id_session: this.$parent.runningSession.id,
        nextEntity: index
      }).then(res => {
        this.updateSession(res)
      })
    },

    updateSession(res) {
      if (res.status) {
        this.entity.index = res.index
        this.entity.answered_entity = JSON.parse(res.answered_entity)
      } else {
        if (res.errCode == 'end') {
          this.$store.dispatch('yclass_session/updateSession', {
            id: this.$cookies.get('play_session').id,
            data: {
              status: 'off'
            }
          }).then(() => {
            this.$parent.runningSession.status = 'off'
            this.$emit('changePage', 'Rank')
            this.socket.emit('rank')
          })
        }
      }
    },
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
        answered_entity: '',
        data: ''
      },
      playerAnswer: []
    }
  },

  components: {
    CardQuestion: require('./_components/CardQuestion').default,
    CardTheory: require('./_components/CardTheory').default,
  }
}
</script>
