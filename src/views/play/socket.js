import Vue from 'vue'
import Global from '/yglobal'
import io from 'socket.io-client'
const socketIO = io(Global.SOCKET_URL)
import vueCookies from 'vue-cookies'

Vue.use(vueCookies)

const socket = {
  channel: function () {
    const channel = window.$cookies.get('player_session').ws_channel
    return channel
  },
  on: function (action, data = null) {
    if (this.channel()) {
      socketIO.on('play.' + this.channel() + '.' + action, data)
    }
  },
  emit: function (action, data = null)  {
    if (this.channel()) {
      socketIO.emit('ws', {
        channel: 'host.' + this.channel() + '.' + action,
        data
      })
    }
  },
}

export default socket
