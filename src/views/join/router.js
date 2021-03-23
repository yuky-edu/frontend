import Vue from 'vue'
import VueRouter from 'vue-router'

import Join from './views/Join.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/join',
    name: 'Join',
    component: Join
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
