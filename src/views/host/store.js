import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import Global from './variable'

Axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.$cookies.get(Global.TOKEN)
const axios = Axios

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
 * * YClass host
 */
const yclass = {

  namespaced: true,
  axios: Axios,
  Global,

  state: {
    data: [], // yclass data
    totalClass: 0,

    // Store untuk menembahkan kelas baru
    newClass: {
      name: 'Untitled',
      code: '-',
      category: 1,
      loading: true
    },

  },

  getters: {
    state: (state) => null,
    data: (state) => state.data,
    totalClass: (state) => state.totalClass,
    newClass: (state) => state.newClass
  },

  mutations: {
    updateState: (state) => {
      //
    },

    updateData: (state, data) => {
      state.data = data
      state.totalClass = data.length
    }
  },

  actions: {
    generateCode: function({ // Generate Class Code
      state
    }) {

      // Reset
      state.newClass = {
        name: 'Untitled',
        code: '-',
        category: 1,
        loading: true
      }

      axios.get(Global.API_URL + '/hosts/yclass/generateCode')
        .then(({
          data
        }) => {
          if (data.status) {
            state.newClass.code = data.code
            state.newClass.loading = false
          }
        })
    },

  }
}

const _yClass = 'yclass/'
Vue.prototype.Xyclass = {
  g: [
    _yClass + 'state',
    _yClass + 'data',
    _yClass + 'totalClass',
    _yClass + 'newClass',
  ],
  m: [
    _yClass + 'updateState',
    _yClass + 'updateData',
  ],
  a: [
    _yClass + 'generateCode',
    _yClass + '',
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
