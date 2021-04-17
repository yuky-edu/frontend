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
      data: [], // {id: idClass, data: [...]}, ...
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

    createQuestion: function({
      state
    }, input) {
      const fd = new FormData()
      for (var key in input) {
        fd.append(key, input[key])
      }
      axios.post(Global.API_URL + '/hosts/question', fd)
        .then(({
          data
        }) => {
          if (data.status)
            console.log("posted")
        })
    },

    getAllQuestionById: function({
      state
    }, idClass) {
      axios.get(Global.API_URL + '/hosts/question/myquestion/yclass/' + idClass) // WARNING: API tidak menampilkan status
        .then(({
          data
        }) => {
          // console.log(data)
          const find = state.myQuestion.data.find(data => data.id == idClass)

          if (!find) {
            state.myQuestion.data.push({
              id: idClass,
              data: data
            })
          }
        })
    },

  }
}
