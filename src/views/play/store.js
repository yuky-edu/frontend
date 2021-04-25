import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import Global from './variable'

Axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.$cookies.get(Global.TOKEN)

Vue.use(Vuex)

import player from './modules/player';

/**
 * * Vuex Main
 */
export default new Vuex.Store({

  state: {
    //
  },

  mutations: {
    //
  },

  actions: {
    //
  },

  modules: {
    player
  },
})
