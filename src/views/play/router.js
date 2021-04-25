import Vue from 'vue'
import VueRouter from 'vue-router'

import Join from './views/Join.vue'
import Joined from './views/Joined.vue'
import Waiting from './views/Waiting.vue'
import Jawab from './views/Jawab.vue'
import CardSelect from './views/CardSelect'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Join',
    component: Join
  },
  {
    path: '/:code',
    name: 'Joined',
    component: Joined
  },
  {
    path: '/waiting',
    name: 'Waiting',
    component: Waiting
  },
  {
    path: '/jawab',
    name: 'Jawab',
    component: Jawab
  },
  {
    path: '/select',
    name: 'CardSelect',
    component: CardSelect
  },
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
