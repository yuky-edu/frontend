import Vue from 'vue'
import Axios from 'axios'
import Global from '../variable'

Axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.$cookies.get(Global.TOKEN)

/**
 * Entity HOST for Data Management.
 */
export default {

  namespaced: true,

  state: {
    myEntity: {}, // {entity_:idClass : [{...}]}, ...
  },

  mutations: {

    /**
     * Set new entity data to state.myEntity.
     *
     * @param Object Reference state
     */
    setEntity: ({
      myEntity
    }, data) => {

      // filter data
      data.data.filter(item => {
        if (item.type == 'q') // [q] => Data with type question
          Global.CLASS.rebuildEntity(item)
      })

      // Set to state data
      Vue.set(myEntity, 'entity_' + data.code, data.data)
      // console.log(myEntity)
    },

  },

  actions: {

    /**
     * Get all entity data by code class.
     *
     * @param Object Reverense state & mutations
     * @param String Code class
     */
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

    /**
     * Get entity data by id entity.
     *
     * @param Object Reverense state
     * @param Int id entity
     */
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

    /**
     * Remove entity data by id entity.
     *
     * @param Object Reverense state
     * @param Int id entity
     */
    removeEntityById: function({
      state
    }, id) {
      Axios.delete(Global.API_URL + '/hosts/entity/' + id)
        .then(({
          data
        }) => {
          if (data.status) {
            console.log('API:removeEntityById', data)
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

    /**
     * Create new entity. (async)
     *
     * @param Object Reverense state & mutations
     * @param Object Input data
     * @return Object Data from API
     */
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
            console.log('API:createEntity', data)
            // commit('setQuestion', {
            //   questions: [data.data],
            //   idClass: input.id_yclass
            // })
            return data.data
          }
        })
    },

    /**
     * Remove entity by id entity.
     *
     * @param Object Reverense state & mutations
     * @param Object Input FromData()
     */
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
