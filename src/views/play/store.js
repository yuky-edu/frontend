import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import Global from './variable'

Vue.use(Vuex)

import player from './modules/player';
import yclass_session from './modules/yclass_session';

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
    player,
    yclass_session
  },
})
