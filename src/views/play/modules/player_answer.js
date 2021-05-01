import Vue from 'vue'
import Axios from 'axios'
import Global from '../variable'

Axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.$cookies.get(Global.TOKEN)

/**
 * * player answer play
 */
export default {

  namespaced: true,

  state: {

  },

  mutations: {
    //
  },

  actions: {
    /*
      this.$store.dispatch('player_answer/answering', {
        entity: 38,
        answer: 'a1'
      }).then(data => {
        this.myAnswer = data.id
      })
   */
    answering: async function({
      state
    }, input) {
      return await Axios.post(Global.API_URL + '/plays/player_answer', {
        entity: input.entity,
        answer: input.answer
      })
        .then(({
          data
        }) => {
          if (data.status) return data.data
        })
    },

    /*
      this.$store.dispatch('player_answer/cancelAnswer', 3).then(() => {
        this.myAnswer = ''
      })
   */
   cancelAnswer: async function({
     state
   }, id_answer) {
     return await Axios.delete(Global.API_URL + '/plays/player_answer/' + id_answer)
       .then(({
         data
       }) => {
         return data
       })
   },

   getByPlayerAndEntity: async function({
     state
   }, id_entity) {
     return await Axios.get(Global.API_URL + '/plays/player_answer/entity/' + id_entity)
       .then(({
         data
       }) => {
         return data
       })
   },

   getMyAnswerBySession: async function({
     state
   }, id_session) {
     return await Axios.get(Global.API_URL + '/plays/player_answer/session/' + id_session)
       .then(({
         data
       }) => {
         return data
       })
   },

  }
}
