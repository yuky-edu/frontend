import Vue from 'vue'
import Axios from 'axios'
import Global from '../variable'

Axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.$cookies.get(Global.TOKEN)
const axios = Axios

/**
 * * Profile host
 */
export default {

  namespaced: true,

  state: {
    profile: { // data profile
      first_name: 'Yuky' // default name
    },
  },

  getters: {

    state: (state) => null,
    profile: (state) => state.profile

  },

  mutations: {

    updateState: (state) => {
      //
    },

    updateStateProfile: (state, data) => {
      state.profile = data
    }

  },

  action: {

  }

}

const _profile = 'profile/'
Vue.prototype.Xprofile = {
  g: [
    _profile + 'state',
    _profile + 'profile',
  ],
  m: [
    _profile + 'updateState',
    _profile + 'updateStateProfile',
  ],
  a: [
    _profile + '',
    _profile + '',
    _profile + '',
  ]
}
