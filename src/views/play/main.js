import Vue from 'vue'
import App from './App.vue'
import Nprogress from 'nprogress'
import socket from './socket'
import router from './router'
import store from './store'
import Global from './variable'
import vueCookies from 'vue-cookies'

require('./variable')
require('./style/main.scss').default
Vue.prototype.axios = require('axios').default
Vue.prototype.Nprogress = Nprogress
Vue.prototype.socket = socket
Vue.use(vueCookies)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
