import Vue from 'vue'
import Axios from 'axios'
import Global from '../variable'

// Axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.$cookies.get(Global.TOKEN)

/**
 * * player play
 */
export default {

  namespaced: true,

  state: {
    socket: {}
  },

  mutations: {
    //
  },

  actions: {

    joinClass: async function({
      state
    }, input) {
      return await Axios.post(Global.API_URL + '/plays/player/join', input)
        .then(({
          data
        }) => {
          console.log('API:joinClass', data)
          if (data.status) return data.data
        })
    },

    /*

      this.$store.dispatch('player/updatePlayer', {
        name: 'UDIN',
        avatar: e.target.files[0]
      })

     */
    updatePlayer: async function({
      state
    }, input) {
      const fd = new FormData()
      fd.append('name', input.name)
      fd.append('avatar', input.avatar)
      return await Axios.post(Global.API_URL + '/plays/player/update', fd)
        .then(({
          data
        }) => {
          console.log('API:updatePlayer', data)
          if (data.status) console.log(data);
        })
    },


  }
}
