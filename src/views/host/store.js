import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import profile from './modules/profile';
import yclass from './modules/yclass';

/**
 * * Vuex Main
 */
export default new Vuex.Store({

  state: {
    app: 'Yuky Guest',
  },

  mutations: {
    //
  },

  actions: {
    //
  },

  modules: {
    profile,
    yclass,
  },
})
