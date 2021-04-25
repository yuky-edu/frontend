import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import Global from './variable'

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
