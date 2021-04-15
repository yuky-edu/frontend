import Vue from 'vue'
import Axios from 'axios'
import Global from '../variable'

Axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.$cookies.get(Global.TOKEN)
const axios = Axios

/**
 * * Profile host
 */
export default {

  namespaced: true,

  state: {
    profile: {
      first_name: 'Yuky'
    },
  },

  actions: {

    myInfo: function({
      state
    }) {
      axios.get(Global.API_URL + '/hosts/user/myInfo')
      .then(({
        data
      }) => {
        state.profile = data
      })
    },

  }
}
