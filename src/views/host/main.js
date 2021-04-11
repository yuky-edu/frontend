import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import router from './router'
import store from './store'
import vueCookies from 'vue-cookies'
import Global from './variable'

require('./style/main.scss')
const _var = require('./variable').default

Vue.use(vueCookies)
Axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.$cookies.get(Global.TOKEN)
Vue.prototype.axios = Axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
