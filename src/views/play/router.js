import Vue from 'vue'
import VueRouter from 'vue-router'

import Join from './views/Join'
import LayoutPlaying from './views/LayoutPlaying'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Join',
    component: Join
  },
  {
    path: '/:code',
    name: 'LayoutPlaying',
    component: LayoutPlaying
  },
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
