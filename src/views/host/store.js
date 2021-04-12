import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * * Profile host
 */
const profile = {

  namespaced: true,

  state: {
    profile: { // data profile
      first_name: 'Yuky' // default name
    },
  },

  getters: {
    getState: (state) => null,
    getStateProfile: (state) => state.profile
  },

  mutations: {
    updateState: (state) => {
      //
    },

    updateStateProfile: (state, data) => {
      state.profile = data
    }
  }
}

Vue.prototype.Xprofile = {
  g: [
    'profile/getState',
    'profile/getStateProfile',
  ],
  m: [
    'profile/updateState',
    'profile/updateStateProfile',
  ]
}

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
    yclass: require('./store/yclass').default
  },
})
