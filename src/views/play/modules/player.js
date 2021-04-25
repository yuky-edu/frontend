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
          return data
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

    /*

      this.$store.dispatch('player/register', {
        id_session: 6,
        name: 'UDIN',
        avatar: {
        type: 'default/custom',
        image: ''
        }
      })

     */
    register: async function({
      state
    }, input) {
      var send
      if (input.avatar.type == 'custom') {
        const fd = new FormData()
        fd.append('id_session', input.id_session)
        fd.append('name', input.name)
        fd.append('avatar', input.avatar.image)
        send = fd
      }
      else if (input.avatar.type == 'default') {
        send = input
      }
      return await Axios.post(Global.API_URL + '/plays/player/register', send)
        .then(({
          data
        }) => {
          console.log('API:register', data)
          if (data.status) console.log(data)
        })
    },


  }
}
