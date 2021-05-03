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

    getAnswerByEntityAndSession: async function({
      state
    }, id) {
      return await Axios.get(Global.API_URL + '/hosts/player_answer/entity/' + id.entity + '/session/' + id.session)
        .then(({
          data
        }) => {
          if (data.status) return data.data
        })
    },

    getPlayerByEntity: async function({
      state
    }, id) {
      return await Axios.get(Global.API_URL + '/hosts/player_answer/entity/' + id.entity + '/session/' + id.session + '/player')
        .then(({
          data
        }) => {
          if (data.status) return data.data
        })
    },


  }
}
