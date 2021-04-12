import Vue from 'vue'
import Axios from 'axios'
import Global from '../variable'

Axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.$cookies.get(Global.TOKEN)
const axios = Axios

/**
 * * yClass host
 */
export default {

  namespaced: true,

  state: {
    data: [], // yclass data
    totalClass: 0,
    categories: [],

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

      // Get class code
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

    // getProfile: function({
    //   state
    // }) {
    //   axios.get(Global.API_URL + '/hosts/user/myInfo')
    //   .then(({
    //     data
    //   }) => {
    //     window.console.log(data)
    //     state.data = data
    //   })
    // },

    getClassCategories: function({
      state
    }) {
      axios.get(Global.API_URL + '/hosts/yclass_categories')
        .then(({
          data
        }) => {
          if (data.status)
            state.categories = data.data
        })
    }

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
    _yClass + 'getClassCategories',
  ]
}
