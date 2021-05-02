import Axios from 'axios'
import Global from '../variable'

Axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.$cookies.get(Global.TOKEN)
const axios = Axios

/**
 * * yClass session host
 */
export default {

  namespaced: true,

  state: {
    runningSession: ''
  },

  actions: {

    getSession: async function({
      state
    }, id_session) {
      return await axios.get(Global.API_URL + '/hosts/yclass_session/single', {
          params: {
            id_session: id_session
          }
        })
        .then(({
          data
        }) => {
          if (data.status) state.runningSession = data.data
        })
    },

    createSession: async function({
      state
    }, input) {
      return await axios.post(Global.API_URL + '/hosts/yclass_session', input)
        .then(({
          data
        }) => {
          return data
        })
    },

    updateSession: async function({
      state
    }, input) {
      return await axios.put(Global.API_URL + '/hosts/yclass_session/' + input.id, input.data)
        .then(({
          data
        }) => {
          if (data.status) return data
        })
    },

    deleteSession: async function({
      state
    }, id) {
      return await axios.delete(Global.API_URL + '/hosts/yclass_session/' + id)
        .then(({
          data
        }) => {
          return data
        })
    },

    nextEntity: async function({
      state
    }, data) {
      return await axios.put(Global.API_URL + '/hosts/yclass_session/'+ data.id_session +'/entity', {
          nextEntity: data.nextEntity
        })
        .then(({
          data
        }) => {
          return data
        })
    },

    updateAnsweredEntity: async function({
      state
    }, data) {
      return await axios.put(Global.API_URL + '/hosts/yclass_session/'+ data.id +'/answeredEntity', {
          answered_entity: data.answered_entity
        })
        .then(({
          data
        }) => {
          return data
        })
    },

  }
}
