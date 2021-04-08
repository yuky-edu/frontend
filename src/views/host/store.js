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
    getState: (state) => {
      //
    },

    getStateProfile: (state) => {
      return state.profile
    }
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
 * * YClass host
 */
const yclass = {

  namespaced: true,

  state: {
    data: [], // // yclass data
    totalClass: 0,
  },

  getters: {
    getState: (state) => {
      //
    },

    getStateData: (state) => {
      return state.data
    },

    getTotalClass: (state) => {
      return state.totalClass
    }
  },

  mutations: {
    updateState: (state) => {
      //
    },
    updateStateData: (state, data) => {
      state.data = data
      state.totalClass = data.length
    }
  }
}

Vue.prototype.Xyclass = {
  g: [
    'yclass/getState',
    'yclass/getStateData',
    'yclass/getTotalClass',
  ],
  m: [
    'yclass/updateState',
    'yclass/updateStateData',
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
    yclass,
  },
})
