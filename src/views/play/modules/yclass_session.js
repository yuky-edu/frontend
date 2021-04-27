import Vue from 'vue'
import Axios from 'axios'
import Global from '../variable'

// Axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.$cookies.get(Global.TOKEN)

/**
 * * yclass session play
 */
export default {

  namespaced: true,

  state: {
    mySession: ''
  },

  mutations: {
    //
  },

  actions: {

    getMySession: async function({
      state
    }) {
      return await Axios.get(Global.API_URL + '/plays/yclass_session/mysession', {
        headers: {
          Authorization: 'Bearer ' + window.$cookies.get(Global.TOKEN)
        }
      })
        .then(({
          data
        }) => {
          if (data.status) state.mySession = data.data
        })
    },

  }
}
