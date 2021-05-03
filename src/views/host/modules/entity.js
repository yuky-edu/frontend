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
     * Set entity data to state.myEntity.
     *
     * @param Object Reference state
     * @param Array Data entities
     */
    setEntity: ({
      myEntity
    }, data) => {
      const key = 'entity_' + $params.code

      data.filter(item => Global.CLASS.rebuildEntity(item))

      if (!myEntity[key]) {
        /**
         * Create new entity.
         */
        Vue.set(myEntity, key, data)
      } else {
        /**
         * Update entity.
         */
        if (data.length == 1)
          myEntity[key].push(data[0])
        else{
          myEntity = {}
          Vue.set(myEntity, key, data)
          console.log(myEntity)
        }
      }
      // console.log(myEntity)
    },

    /**
     * Remove entity data in state.
     *
     * @param Object Master data entity in state
     * @param Int Id entity
     */
    removeEntity: ({
      myEntity
    }, id) => {
      const key = 'entity_' + $params.code
      const data = myEntity[key]
      const index = Global.CLASS.searchEntity(data, id)
      data.splice(index, 1)
    },

  },

  actions: {

    /**
     * Get all entity data by code class.
     *
     * @param Object Reference state & mutations
     */
     getEntitiesByCodeClass: function({
       state,
       commit
     }, code) {
       Axios.get(Global.API_URL + '/hosts/entity/myentity/yclass/by?code=' + code)
         .then(({
           data
         }) => {
           commit('setEntity', data.data)
         })
     },

    /**
     * Get entity data by id entity.
     *
     * @param Object Reference state
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
     * Create new entity. (async)
     *
     * @param Object Reference state & mutations
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
            commit('setEntity', [data.data])
            return data.data
          }
        })
    },

    /**
     * Update entity by id entity.
     *
     * @param Object Reference state & mutations
     * @param Object Input FromData()
     */
    updateEntity: function({
      state,
      commit
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
            console.log('state', state)
        })
    },

    /**
     * Remove entity data by id entity.
     *
     * @param Object Reference state
     * @param Int id entity
     */
    removeEntityById: function({
      state, commit
    }, id) {
      Axios.delete(Global.API_URL + '/hosts/entity/' + id)
        .then(({
          data
        }) => {
          if (data.status) {
            console.log('API:removeEntityById', data) //
            commit('removeEntity', id)
          }
        })
    },

  }
}
