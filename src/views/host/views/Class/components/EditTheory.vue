<template>
<div id="class-theory">
  <div class="row">
    <div class="col-9">
      <div class="left-panel d-flex">
        <div class="q-number mr-3">
          <button class="btn btn-sm btn-gray waves-effect waves-light">
            {{ data.id }}
          </button>
        </div>
        <div class="card card-question w-100">
          <div class="card-body">

            <div class="question-form">
              <div class="form-group y-form">
                <textarea v-model="data.theory" class="form-control" rows="3" placeholder="Deskripsikan Materi..."></textarea>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="right-panel">

        <CardMedia />

        <div class="card mt-4">
          <div class="card-body">
            <div class="action-button">
              <button @click="updateTheory()" class="btn btn-lg btn-blue shadow btn-block mb-3 waves-effect waves-light">
                <span>Simpan Materi</span>
              </button>
              <router-link :to="{name: 'ClassDetail', params: {code: $route.params.code}}" class="btn btn-lg btn-danger shadow btn-block mb-3 waves-effect waves-light">
                <span>Kembali</span>
              </router-link>
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

  methods: {
    updateTheory() {
      const data = this.rebuildBeforeSave(this.data)
      console.log(data)
      this.$store.dispatch('entity/updateEntity', {
        input: data,
        id: $params.id_entity
      })
    },

    rebuildBeforeSave(data) {
      const newData = {
        theory: data.theory,
        id_yclass: data.yclass.id,
        type: 't',
      }

      if (data.media.file) newData.media = data.media.file

      return newData
    },

    loadTheory() {
      const entities = this.$store.state.entity.myEntity['entity_' + $params.code]
      if (entities) {
        this.data = JSON.parse(
          JSON.stringify(
            entities.find(data => data.id == $params.id_entity)
          )
        )
        // console.log(this.data)
      }
    },
  },

  mounted() {
    window.$params = this.$route.params
    window.$query = this.$route.query

    this.loadTheory()
  },

  watch: {
    '$store.state.entity.myEntity': function() {
      this.loadTheory()
    },
  },

  data() {
    return {
      type: 'radio',
      data: {
        id: 1,
        theory: '',
        media: {
          type: null,
          path: null,
          file: null,
        },
      },
    }
  },

  components: {
    CardMedia: require('./CardMedia').default
  }
}
</script>
