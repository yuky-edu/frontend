import Vue from 'vue'
import App from './App.vue'
import io from 'socket.io-client'
import Axios from 'axios'
import moment from 'moment'
import router from './router'
import store from './store'
import vueCookies from 'vue-cookies'
import Global from './variable'

require('./style/main.scss')
require('@/plugin/host.js')

Vue.use(vueCookies)
Axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.$cookies.get(Global.TOKEN)
Vue.prototype.axios = Axios
// Vue.prototype.io = io

moment.locale('id');
Vue.config.productionTip = false
Vue.prototype.moment = moment

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
