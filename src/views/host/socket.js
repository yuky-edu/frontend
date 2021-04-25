import io from 'socket.io-client'
import Global from '/yglobal'
const socketIO = io(Global.SOCKET_URL)
import Vue from 'vue'
import vueCookies from 'vue-cookies'
Vue.use(vueCookies)

const socket = {
  channel: function () {
    const channel = window.$cookies.get('play_session').ws_channel
    return channel
  },
  on: function (action, data=null) {
    if (this.channel()) {
      socketIO.on('host.' + this.channel() + '.' + action, data)
    }
  },
  emit: function (action, data=null)  {
    if (this.channel()) {
      socketIO.emit('ws', {
        channel: 'play.' + this.channel() + '.' + action,
        data
      })
    }
  }
}

export default socket
