<template>
<div id="play-entity">

  <CardQuestion v-if="entity.data.type == 'q'" :data="entity" />
  <CardTheory v-if="entity.data.type == 't'" :data="entity" />
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

    checkAnswer() {
      this.entity.isCheckAnswer = true
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
      })
      this.updateSession(res)
    },

    previousEntity() {
      this.$store.dispatch('yclass_session/nextEntity', {
        id_session: this.runningSession.id,
        nextEntity: this.entity.index - 1
      }).then(res => {
        this.updateSession(res)
      })
    },

    goToEntity(index) {
      this.$store.dispatch('yclass_session/nextEntity', {
        id_session: this.runningSession.id,
        nextEntity: index
      }).then(res => {
        this.updateSession(res)
      })
    },

    updateSession(res) {
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
        data: '',
        isCheckAnswer: false
      }
    }
  },

  components: {
    CardQuestion: require('./_components/CardQuestion').default,
    CardTheory: require('./_components/CardTheory').default,
  }
}
</script>


Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ut nulla repudiandae voluptatem qui, similique dolore dolorem non laborum soluta rem debitis voluptates eveniet eius, nisi cum consequuntur, aperiam maiores?
