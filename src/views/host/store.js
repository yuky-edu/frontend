import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Axios from 'axios'
import Global from './variable'

Axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.$cookies.get(Global.TOKEN)

import profile from './modules/profile';
import yclass from './modules/yclass';
import entity from './modules/entity';
import player from './modules/player';

/**
 * * Vuex Main
 */
export default new Vuex.Store({

  state: {
    app: 'Yuky Guest',
    counter: {
      question: 0,
      theory: 0,
    }
  },

  mutations: {
    //
  },

  actions: {
    questionCount: function({
      state
    }) {
      // console.log(state)
      Axios.get(Global.API_URL + '/hosts/entity/question/myquestion/count/all')
        .then(({
          data
        }) => {
          if (data.status) state.counter.question = data.count
        })
    },

    theoryCount: function({
      state
    }) {
      // console.log(state)
      Axios.get(Global.API_URL + '/hosts/entity/theory/mytheory/count/all')
        .then(({
          data
        }) => {
          // console.log(data)
          if (data.status) state.counter.theory = data.count
        })
    }
  },

  modules: {
    profile,
    yclass,
    entity,
    player
  },
})
