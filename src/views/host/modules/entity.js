import Vue from 'vue'
import Axios from 'axios'
import Global from '../variable'

Axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.$cookies.get(Global.TOKEN)

// FUNCTIONS
const answerKey = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6']
const label = ['A', 'B', 'C', 'D', 'E', 'F']

function rebuildEntity(data) {

  // rebuild answer
  var answerList = []

  answerKey.forEach((key, i) => {
    if (data[key]) {
      var _answer = {
        correct: false,
        label: label[i],
        value: data[key],
      }
      if (key == data.correct) _answer.correct = true
      answerList.push(_answer)
    }
    delete data[key]
  })
  delete data.correct
  data.answer = answerList

  // Rebuild media
  const mediaTemp = {
    path: null,
    type: null,
    file: null
  }
  if (data.media) {
    mediaTemp.path = data.media[0]
    mediaTemp.type = data.media[1]
  }

  data.media = mediaTemp

  // console.log(data)
}

/**
 * * entity host
 */
export default {

  namespaced: true,

  state: {
    myEntity: {}, // {entity_:idClass : [{...}]}, ...
  },

  mutations: {
    setEntity: ({ // Menyusun ulang data entitas
      myEntity
    }, data) => {
      const answerKey = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6']
      const label = ['A', 'B', 'C', 'D', 'E', 'F']

      // filter data
      data.data.filter(item => {
        if (item.type == 'q')
          rebuildEntity(item)
      })

      // Set to state data
      Vue.set(myEntity, 'entity_' + data.code, data.data)

      // console.log(myEntity)
    },

  },

  actions: {

    getEntitiesByCodeClass: function({
      state,
      commit
    }, code) {
      Axios.get(Global.API_URL + '/hosts/entity/myentity/yclass/by?code=' + code)
        .then(({
          data
        }) => {
          commit('setEntity', {
            data: data.data,
            code
          })
        })
    },

    getEntityById: function({
      state
    }, id) {
      Axios.get(Global.API_URL + '/hosts/entity/myentity/' + id)
        .then(({
          data
        }) => {
          console.log(data)
        })
    },

    removeEntityById: function({
      state
    }, id) {
      // console.log(id)
      Axios.delete(Global.API_URL + '/hosts/entity/' + id)
        .then(({
          data
        }) => {
          if (data.status) {
            console.log('remove question', data)
            // remove data question in state
            // const data = state.myEntity.data['entity_' + id.idClass]
            //
            // data.forEach((item, i) => {
            //   if (item.id == id.idQuestion)
            //     data.splice(i, 1)
            // })
          }
        })

    },

    createEntity: async function({
      state,
      commit
    }, input) {
      const fd = new FormData()
      for (var key in input) {
        fd.append(key, input[key])
      }
      var type = input.type === 'q' ? 'question' : 'theory'
      return await Axios.post(Global.API_URL + '/hosts/entity/' + type, fd)
        .then(({
          data
        }) => {
          if (data.status) {
            console.log('created', data)
            // commit('setQuestion', {
            //   questions: [data.data],
            //   idClass: input.id_yclass
            // })
            // return data.data
          }
        })
    },

    updateEntity: function({
      state
    }, {
      input,
      id
    }) {
      const fd = new FormData()
      for (var key in input) {
        fd.append(key, input[key])
      }
      var type = input.type === 'q' ? 'question' : 'theory'
      Axios.post(Global.API_URL + '/hosts/entity/' + type + '/my' + type + '/' + id + '/update', fd)
        .then(({
          data
        }) => {
          if (data.status)
            console.log("updated", data)
        })
    },

  }
}
