import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
    profile: require('./store/profile').default,
    yclass: require('./store/yclass').default,
  },
})
