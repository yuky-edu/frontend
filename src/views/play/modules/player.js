import Vue from 'vue'
import Axios from 'axios'
import Global from '../variable'

Axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.$cookies.get(Global.TOKEN)

/**
 * * player host
 */
export default {

  namespaced: true,

  state: {
    //
  },

  mutations: {
    //
  },

  actions: {

    joinClass: async function({
      state
    }, input) {
      return await Axios.post(Global.API_URL + '/plays/player/join', input)
        .then(({
          data
        }) => {
          console.log('API:joinClass', data)
          if (data.status) console.log(data);
        })
    },


  }
}