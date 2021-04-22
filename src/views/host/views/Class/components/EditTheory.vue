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
                <textarea v-model="data.theory" class="form-control" rows="3" placeholder="Ketik Soal Kamu Disini..."></textarea>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="right-panel">
        <div class="card card-media">
          <div class="card-body">
            <div class="media-wrapper">
              <div class="media-button">
                <button class="btn btn-warning btn-lg y-btn-icon-only shadow waves-effect waves-light">
                  <i class="fa fa-pen"></i>
                </button>
                <button class="btn btn-aqua btn-lg y-btn-icon-only shadow waves-effect waves-light">
                  <i class="fa fa-eye"></i>
                </button>
                <button class="btn btn-danger btn-lg y-btn-icon-only shadow waves-effect waves-light">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
              <div class="media-preview">
                <span class="alt">Tidak Ada Media</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card mt-4">
          <div class="card-body">
            <div class="action-button">
              <button @click="updateTheory()" class="btn btn-lg btn-blue shadow btn-block mb-3 waves-effect waves-light">
                <span>Simpan Soal</span>
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
      this.$store.dispatch('entity/updateEntity', {
        input: {
          type: 't',
          theory: this.data.theory
        },
        id: this.$route.params.id
      })
    },

    loadEntities() {
      const query = this.$route.query
      const params = this.$route.params
      const entities = this.$store.state.entity.myEntity['entity_' + params.code]
      if (entities) {
        this.data = JSON.parse(
          JSON.stringify(
            entities.find(data => data.id == params.id)
          )
        )
        console.log(this.data)
      }
    },
  },

  mounted() {
    this.loadEntities()
  },

  watch: {
    '$store.state.entity.myEntity': function() {
      this.loadEntities()
    },
  },

  data() {
    return {
      type: 'radio',
      data: {
        id: 1,
        theory: '',
      },
    }
  },

  components: {
    //
  }
}
</script>
