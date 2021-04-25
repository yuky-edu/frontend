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
    myClass: [],
    categories: [],

    create: {
      code: ''
    }
  },

  actions: {

    generateCode: function({
      state
    }) {
      axios.get(Global.API_URL + '/hosts/yclass/generateCode')
        .then(({
          data
        }) => {
          if (data.status)
            state.create.code = data.code
        })
    },

    getCategories: function({
      state
    }) {
      axios.get(Global.API_URL + '/hosts/yclass_categories')
        .then(({
          data
        }) => {
          if (data.status)
            state.categories = data.data
        })
    },

    getMyClass: function({
      state
    }) {
      axios.get(Global.API_URL + '/hosts/yclass/myclass')
        .then(({
          data
        }) => {
          if (data.status) state.myClass = data.data
        })
    },

    getMyClassByCode: function({
      state
    }, code) {
      axios.get(Global.API_URL + '/hosts/yclass/myclass/single?code=' + code)
        .then(({
          data
        }) => {
          if (data.status) console.log("API:/hosts/yclass/myclass/single?code=$code");
        })
    },

    addClass: async function({
      state, dispatch
    }, input) {
      await axios.post(Global.API_URL + '/hosts/yclass', input)
        .then(({
          data
        }) => {
          if (data.status) dispatch('getMyClass')
        })
    },

    deleteClass: async function({
      state, dispatch
    }, id) {
      await axios.delete(Global.API_URL + '/hosts/yclass/delete/' + id)
        .then(({
          data
        }) => {
          if (data.status) dispatch('getMyClass')
        })
    },

  }
}
