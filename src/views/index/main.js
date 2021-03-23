import Vue from 'vue'
import App from './App.vue'
import vuetify from '/src/plugins/vuetify'
import router from './router'
import store from './store'

require('./variable').default
Vue.prototype.axios = require('axios').default

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
