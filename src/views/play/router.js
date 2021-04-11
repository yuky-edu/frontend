import Vue from 'vue'
import VueRouter from 'vue-router'

import Join from './views/Join.vue'
import Joined from './views/Joined.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Join',
    component: Join
  },
  {
    path: '/joined',
    name: 'Joined',
    component: Joined
  },
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
