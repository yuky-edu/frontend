import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import Global from './variable'

Vue.use(Vuex)

import player from './modules/player';
import player_answer from './modules/player_answer';
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
    player_answer,
    yclass_session
  },
})
