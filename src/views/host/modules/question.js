import Vue from 'vue'
import Axios from 'axios'
import Global from '../variable'

Axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.$cookies.get(Global.TOKEN)
const axios = Axios

/**
 * * question host
 */
export default {

  namespaced: true,

  state: {
    myQuestion: {
      total: 0,
      // data: [], // {id: idClass, questions: [...]}, ...
      data: {}, // {question_:id : data}, ...
    }
  },

  mutations: {
    rebuildQuestion: ({ // Menyusun ulang data soal
      myQuestion
    }, data) => {
      const answerKey = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6']
      const label = ['A', 'B', 'C', 'D', 'E', 'F']
      var dataQuestion = []

      // filter data
      data.questions.filter(item => {
        var answerList = []

        answerKey.forEach((key, i) => {
          if (item[key]) {
            var _answer = {
              correct: false,
              label: label[i],
              value: item[key],
            }
            if (key == item.correct) _answer.correct = true
            answerList.push(_answer)
            delete item[key]
            // delete item.correct
          }
        })

        item.answer = answerList
      })

      // window.console.log(data)

      // Set to state data
      Vue.set(myQuestion.data, 'questions_' + data.idClass, data.questions)

      // console.log(myQuestion)
    }
  },

  actions: {

    countMyQuestion: function({
      state
    }) {
      axios.get(Global.API_URL + '/hosts/question/myquestion/count/all')
        .then(({
          data
        }) => {
          if (data.status)
            state.myQuestion.total = data.count
        })
    },

    updateQuestion: function({
      state
    }, {input, idQuestion}) {
      const fd = new FormData()
      for (var key in input) {
        fd.append(key, input[key])
      }
      axios.post(Global.API_URL + '/hosts/question/myquestion/'+idQuestion+'/update', fd) // WARNING: Methot + URL tidak pas
        .then(({
          data
        }) => {
          if (data.status)
            console.log("updated")
            // TODO: Update data to store
        })
    },

    getAllQuestionById: function({
      state,
      commit
    }, idClass) {
      axios.get(Global.API_URL + '/hosts/question/myquestion/yclass/' + idClass) // WARNING: API tidak menampilkan status
        .then(({
          data
        }) => {
          // console.log(data)
          commit('rebuildQuestion', {
            questions: data,
            idClass
          })
        })
    },

    // getQuestionById: function({
    //   state
    // }, idQuestion) {
    //   axios.get(Global.API_URL + '/hosts/question/myquestion/' + idQuestion) // WARNING: API tidak menampilkan status
    //     .then(({
    //       data
    //     }) => {
    //       // console.log(data)
    // },

    removeQuestionByid: function({
      state
    }, id) {
      // console.log(id)
      axios.delete(Global.API_URL + '/hosts/question/myquestion/' + id.idQuestion)
        .then(({
          data
        }) => {
          if (data.status) {
            console.log('remove question')
            // remove data question in state
            const data = state.myQuestion.data['questions_' + id.idClass]

            data.forEach((item, i) => {
              if (item.id == id.idQuestion)
                data.splice(i, 1)
            })
          }
        })

    }

  }
}
