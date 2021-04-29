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
    // answer: [],
  },

  mutations: {
    //
  },

  actions: {

    getAnswerByEntity: async function({
      state
    }, id_entity) {
      return await Axios.get(Global.API_URL + '/hosts/player_answer/entity/' + id_entity)
        .then(({
          data
        }) => {
          if (data.status) return data.data
        })
    },


  }
}
