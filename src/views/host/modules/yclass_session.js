import Axios from 'axios'
import Global from '../variable'

Axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.$cookies.get(Global.TOKEN)
const axios = Axios

/**
 * * yClass session host
 */
export default {

  namespaced: true,

  state: {

  },

  actions: {

    getSession: function({
      state
    }, id_session) {
      axios.get(Global.API_URL + '/hosts/yclass_session', {
        params: {
          id_session: id_session
        }
      })
        .then(({
          data
        }) => {
          if (data.status) console.log(data);
        })
    },

    createSession: async function({
      state
    }, input) {
      await axios.post(Global.API_URL + '/hosts/yclass_session', input)
        .then(({
          data
        }) => {
          if (data.status) console.log('sukses', data);
        })
    },

    updateSession: async function({
      state
    }, input) {
      await axios.put(Global.API_URL + '/hosts/yclass_session/' + input.id, input.data)
        .then(({
          data
        }) => {
          if (data.status) console.log('sukses', data);
        })
    },

  }
}
