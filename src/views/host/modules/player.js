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
    // players: [],
  },

  mutations: {
    //
  },

  actions: {

    getPlayersBySession: function({
      state,
      commit
    }, id_session) {
      Axios.get(Global.API_URL + '/hosts/player/session/' + id_session)
        .then(({
          data
        }) => {
          console.log('API:getPlayersBySession', data);
          if (data.status) Vue.set(state, 'players', data.data)
        })
    },

    kickPlayer: function({
      state
    }, id_player) {
      Axios.delete(Global.API_URL + '/hosts/player/' + id_player)
        .then(({
          data
        }) => {
            return true
        })
        Global.PLAYER.removePlayers(state.players, id_player)
    },


  }
}
