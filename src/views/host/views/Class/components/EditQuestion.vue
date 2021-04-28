<template>
<div id="class-question">
  <div class="row">
    <div class="col-lg-9 col-md-12">
      <div class="left-panel">
        <div class="q-number">
          <button class="btn btn-sm btn-gray waves-effect waves-light">
            {{ data.id }}
          </button>
        </div>
        <div class="card card-entity w-100">
          <div class="card-body">

            <div class="question-form">
              <div class="form-group y-form">
                <textarea v-model="data.question" class="form-control" rows="3" placeholder="Ketik Soal Kamu Disini..."></textarea>
              </div>
            </div>

            <div class="answer-list">
              <ul class="list-group">

                <li v-for="(item, index) in data.answer" class="list-group-item">
                  <div class="answer">
                    <button @click="selectAnswer(item, index)" :class="{selected: item.correct}" class="btn btn-md btn-outline-gray-2">
                      {{ item.label}}
                    </button>
                    <div class="form-group y-form">
                      <input v-model="item.value" type="text" class="form-control form-control-md" placeholder="Deskripsikan Soal...">
                    </div>
                    <div class="y-action">
                      <i v-if="data.answer.length > 2" @click="removeAnswer(index)" class="fa fa-times"></i>
                    </div>
                  </div>
                </li>

              </ul>
            </div>

            <div v-if="data.answer.length < 6" @click="addAnswer()" class="action-bottom text-center">
              <button class="btn btn-blue br-5">
                <span>Tambah Jawaban</span>
                <i class="fa fa-plus ml-2"></i>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-3">
      <div class="right-panel">

      <CardMedia />

        <div class="card mt-4">
          <div class="card-body">
            <div class="action-button">
              <button @click="updateEntity()" class="btn btn-lg btn-blue shadow btn-block mb-3 waves-effect waves-light">
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
    updateEntity() {
      const data = this.rebuildBeforeSave(this.data)
      this.$store.dispatch('entity/updateEntity', {
        input: data,
        id: $params.id_entity
      }).then(res => {
        this.$router.push({
          name: 'ClassDetail',
          params: {
            code: $params.code
          }
        })
      })
    },

    rebuildBeforeSave(data) {
      const answerKey = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6']
      const newData = {
        question: data.question,
        id_yclass: data.yclass.id,
        correct: '',
        type: 'q',
      }

      data.answer.forEach((item, i) => {
        newData[answerKey[i]] = item.value
        if (item.correct) newData.correct = answerKey[i]
      })

      if (data.media.file) newData.media = data.media.file

      return newData
    },

    loadQuestion() {
      const entities = this.$store.state.entity.myEntity['entity_' + $params.code]
      if (entities) {
        this.data = JSON.parse(
          JSON.stringify(
            entities.find(data => data.id == $params.id_entity)
          )
        )
      }
      // console.log(this.data)
    },

    selectAnswer(item, i) {
      // console.log(item)
      this.data.answer.filter(data => data.correct = false)
      item.correct = !item.correct
    },

    removeAnswer(i) {
      this.data.answer.splice(i, 1)
    },

    rebuildAnswer() {
      const answerKey = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6']
      const label = ['A', 'B', 'C', 'D', 'E', 'F']

      var i = 0
      this.data.answer.filter(item => {
        item.label = label[i]
        i++
      })
    },

    addAnswer() {
      const answer = this.data.answer
      if (answer.length < 6)
        answer.push({
          correct: false,
          label: '',
          value: ''
        })
    },

  },

  mounted() {
    window.$params = this.$route.params
    window.$query = this.$route.query

    this.loadQuestion()
  },

  watch: {
    '$store.state.entity.myEntity': function() {
      this.loadQuestion()
    },

    'data.answer': function() {
      this.rebuildAnswer()
    }
  },

  data() {
    return {
      type: 'radio',
      data: {
        id: 1,
        question: '',
        media: {
          type: null,
          path: null,
          file: null,
        },
        answer: [{
          correct: false,
          label: 'A',
          value: '',
        }, {
          correct: false,
          label: 'B',
          value: '',
        }]
      }
    }
  },

  components: {
    CardMedia: require('./CardMedia').default
  }
}
</script>
