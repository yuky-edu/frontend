import Vue from 'vue'
import App from './App.vue'
import vuetify from '/src/plugins/vuetify';
import router from './router'
import store from './store'

import variable from './variable'
window._var = variable

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
