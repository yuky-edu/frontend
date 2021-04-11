import Vue from 'vue'
import App from './App.vue'
import vueCookies from 'vue-cookies'
import router from './router'
import store from './store'

require('./variable')
require('./style/main.scss').default

Vue.use(vueCookies)
Vue.prototype.axios = require('axios').default

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
