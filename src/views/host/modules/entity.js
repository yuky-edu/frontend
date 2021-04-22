import Vue from 'vue'
import Axios from 'axios'
import Global from '../variable'

Axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.$cookies.get(Global.TOKEN)

// FUNCTIONS
const answerKey = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6']
const label = ['A', 'B', 'C', 'D', 'E', 'F']

function rebuildQuestion(data) {
  var answerList = []

  answerKey.forEach((key, i) => {
    if (data[key]) {
      var _answer = {
        correct: false,
        label: label[i],
        value: data[key],
      }
      if (key == data.correct) _answer.correct = true
      answerList.push(_answer)
    }
    delete data[key]
  })
  delete data.correct
  data.answer = answerList
  // console.log(data)
}

/**
 * * question host
 */
export default {

  namespaced: true,

  state: {
    myEntity: {}, // {entity_:idClass : {...}}, ...
  },

  mutations: {
    setEntity: ({ // Menyusun ulang data entitas
      myEntity
    }, data) => {
      const answerKey = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6']
      const label = ['A', 'B', 'C', 'D', 'E', 'F']

      // filter data
      data.data.filter(item => {
        rebuildQuestion(item)
      })

      // window.console.log(data)

      // Set to state data
      // if (!myQuestion.data['questions_' + data.idClass])
        // Vue.set(myQuestion.data, 'questions_' + data.idClass, data.questions)
      // else
        // myQuestion.data['question_' + data.idClass].push(data.questions[0])


      // console.log(myQuestion)
    },

  },

  actions: {

    getEntityByCodeClass: function({
      state,
      commit
    }, code) {
      Axios.get(Global.API_URL + '/hosts/entity/myentity/yclass/by?code=' + code)
        .then(({
          data
        }) => {
          commit('setEntity', {
            data: data.data,
            code
          })
        })
    },

    createQuestion: async function({
      state,
      commit
    }, input) {
      const fd = new FormData()
      for (var key in input) {
        fd.append(key, input[key])
      }
      return await Axios.post(Global.API_URL + '/hosts/question', fd)
        .then(({
          data
        }) => {
          if (data.status) {
            commit('setQuestion', {
              questions: [data.data],
              idClass: input.id_yclass
            })
            return data.data
          }
        })
    },

    updateQuestion: function({
      state
    }, {
      input,
      idQuestion
    }) {
      const fd = new FormData()
      for (var key in input) {
        fd.append(key, input[key])
      }
      Axios.post(Global.API_URL + '/hosts/question/myquestion/' + idQuestion + '/update', fd) // WARNING: Methot + URL tidak pas
        .then(({
          data
        }) => {
          if (data.status)
            console.log("updated")
          // TODO: Update data to store
        })
    },

    // getQuestionById: function({
    //   state
    // }, idQuestion) {
    //   Axios.get(Global.API_URL + '/hosts/question/myquestion/' + idQuestion) // WARNING: API tidak menampilkan status
    //     .then(({
    //       data
    //     }) => {
    //       // console.log(data)
    // },

    removeQuestionByid: function({
      state
    }, id) {
      // console.log(id)
      Axios.delete(Global.API_URL + '/hosts/question/myquestion/' + id.idQuestion)
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
