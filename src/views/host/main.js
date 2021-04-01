import Vue from 'vue'
import App from './App.vue'
import Nprogress from 'nprogress'
import router from './router'
import store from './store'

require('./variable')
require('./style/main.scss').default
require('/src/assets/plugin/nprogress.css').default
Vue.prototype.axios = require('axios').default
Vue.prototype.Nprogress = Nprogress

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
