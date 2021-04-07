import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import Nprogress from 'nprogress'
import router from './router'
import store from './store'

require('./style/main.scss').default

const _var = require('./variable').default
window.console.log(_var.getCookie('token'))

Axios.defaults.headers.common['Authorization'] = 'Bearer ' + _var.getCookie('token')
Vue.prototype.axios = Axios
Vue.prototype.Nprogress = Nprogress

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
