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
    socket: {},
    myInfo: ''
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
          return data
        })
    },

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

    register: async function({
      state
    }, input) {
      var send
      if (input.avatar.type == 'custom') {
        const fd = new FormData()
        fd.append('id_session', input.id_session)
        fd.append('name', input.name)
        fd.append('avatar_type', input.avatar.type)
        fd.append('avatar', input.avatar.image)
        send = fd
      }
      else if (input.avatar.type == 'default') {
        send = {
          id_session: input.id_session,
          name: input.name,
          avatar: input.avatar.image,
          avatar_type: input.avatar.type
        }
      }
      return await Axios.post(Global.API_URL + '/plays/player/register', send)
        .then(({
          data
        }) => {
          if (data.status) {
            state.myInfo = data.data
            return data.data
          }
        })
    },

    getMyInfo: async function({
      state
    }, input) {
      return await Axios.get(Global.API_URL + '/plays/player/myInfo', {
        headers: {
          Authorization: 'Bearer ' + window.$cookies.get(Global.TOKEN)
        }
      })
        .then(({
          data
        }) => {
          state.myInfo = data
          return state.myInfo
        })
    },



  }
}
