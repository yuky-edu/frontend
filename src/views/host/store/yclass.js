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
    totalClass: 1,
    categories: [],

    // Store untuk menembahkan kelas baru
    newClass: {
      title: 'Untitled',
      code: '-',
      category: 0,
      loading: true
    },

  },

  getters: {

    state: (state) => null,
    data: (state) => state.data,
    totalClass: (state) => state.totalClass,
    newClass: (state) => state.newClass,
    categories: (state) => state.categories,

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

    generateCode_: function({ // Generate Class Code
      state
    }) {

      // Reset
      state.newClass = {
        title: 'Untitled',
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

    getClassCategories_: function({
      state
    }) {
      axios.get(Global.API_URL + '/hosts/yclass_categories')
        .then(({
          data
        }) => {
          // window.console.log(data)
          if (data.status)
            state.categories = data.data
        })
    },

    getDataClass_: function({
      state
    }) {
      axios.get(Global.API_URL + '/hosts/yclass/myclass')
        .then(({
          data
        }) => {
          window.console.log(data)
          if (data.status) state.data = data.data
        })
    },

    addClass_: function({
      state, dispatch
    }) {
      const data = state.newClass

      data.loading = true
      axios.post(Global.API_URL + '/hosts/yclass', {
        category: data.category,
        code: data.code,
        title: data.title,
        description: 'Lorem ipsum dolor.'
      })
      .then( response => {
        window.console.log(response)
        data.loading = false
        dispatch('getDataClass_')
        $('#make-class-code').modal('toggle')
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
    _yClass + 'categories',
  ],
  m: [
    _yClass + 'updateState',
    _yClass + 'updateData',
  ],
  a: [
    _yClass + 'generateCode_',
    _yClass + 'getClassCategories_',
    _yClass + 'getDataClass_',
    _yClass + 'addClass_',
  ]
}
