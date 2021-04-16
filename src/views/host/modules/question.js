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
      total: 0
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
            console.log("posted");
        })
    },

  }
}
