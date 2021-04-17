<template>
<div id="class-question">
  <div class="row">
    <div class="col-9">
      <div class="left-panel d-flex">
        <div class="q-number mr-3">
          <button class="btn btn-sm btn-gray waves-effect waves-light">
            {{ dataQuestion.id }}
          </button>
        </div>
        <div class="card card-question">
          <div class="card-body">

            <div class="question-form">
              <div class="form-group y-form">
                <textarea v-model="dataQuestion.question" class="form-control" rows="3" placeholder="Ketik Soal Kamu Disini..."></textarea>
              </div>
            </div>

            <div class="answer-list">
              <ul class="list-group">

                <li v-for="(item, index) in dataQuestion.answer" class="list-group-item">
                  <div class="answer">
                    <button @click="selectAnswer(item, index)" :class="{selected: item.correct}" class="btn btn-md btn-outline-gray-2">
                      {{ item.label}}
                    </button>
                    <div class="form-group y-form">
                      <input v-model="item.value" type="text" class="form-control form-control-md" placeholder="Ketik Soal Kamu Disini...">
                    </div>
                    <div class="y-action">
                      <i v-if="dataQuestion.answer.length > 2" @click="removeAnswer(index)" class="fa fa-times"></i>
                    </div>
                  </div>
                </li>

              </ul>
            </div>

            <div v-if="dataQuestion.answer.length < 6" @click="addAnswer()" class="action-bottom text-center">
              <button class="btn btn-blue">
                <span>Tambah Jawaban</span>
                <i class="fa fa-plus ml-2"></i>
              </button>
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
              <button class="btn btn-lg btn-blue shadow btn-block mb-3 waves-effect waves-light">
                <span>Simpan Soal</span>
              </button>
              <a href="/host#/class?id=2" class="btn btn-lg btn-danger shadow btn-block mb-3 waves-effect waves-light">
                <span>Batalkan</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>
</template>

<script>
/*
  createQuestion() = buat soal
 */
export default {

  computed: {
    yClass: function() {
      // const data = this.$store.getters[this.Xyclass.g[1]] // data
      // return data
    }
  },

  methods: {
    createQuestion() {
      this.$store.dispatch('question/createQuestion', {
        // question: "asd",
        // correct: "a1",
        // id_yclass: 2,
        // a1: "jawaban 1",
        // a2: "jawaban 2"
      })
    },

    loadQuestion() {
      const query = this.$route.query
      const dataQuestions = this.$store.state.question.myQuestion.data.find(data => data.id == query.id)
      if (dataQuestions) {
        // console.log(dataQuestions)
        // console.log(dataQuestions.questions[query.question - 1])
        this.dataQuestion = JSON.parse(JSON.stringify(dataQuestions.questions[query.question - 1]))
      }
    },

    getAllQuestion_() {
      const idClass = this.$route.query.id
      this.$store.dispatch('question/getAllQuestionById', idClass)
    },

    selectAnswer(item, i) {
      console.log(item)
      this.dataQuestion.answer.filter(data => data.correct = false)
      item.correct = !item.correct
    },

    removeAnswer(i) {
      this.dataQuestion.answer.splice(i, 1)
    },

    rebuildAnswer() {
      const answerKey = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6']
      const label = ['A', 'B', 'C', 'D', 'E', 'F']

      var i = 0
      this.dataQuestion.answer.filter(item => {
        item.label = label[i]
        i++
      })
    },

    addAnswer() {
      const answer = this.dataQuestion.answer
      if (answer.length < 6)
        answer.push({
          correct: false,
          label: '',
          value: ''
        })
    }
  },

  mounted() {
    this.getAllQuestion_() // sementara
    this.loadQuestion()
  },

  watch: {
    '$store.state.question.myQuestion.data': function() {
      this.loadQuestion()
    },

    'dataQuestion.answer': function() {
      this.rebuildAnswer()
    }
  },

  data() {
    return {
      type: 'radio',
      dataQuestion: {
        id: 1,
        question: '',
        answer: [{
          correct: false,
          label: 'A',
          value: '',
        }, {
          correct: false,
          label: 'B',
          value: '',
        }]
      },
    }
  },

  components: {
    //
  }
}
</script>
