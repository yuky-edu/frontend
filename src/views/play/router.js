import Vue from 'vue'
import VueRouter from 'vue-router'

import Join from './views/Join'
import Profile from './views/Profile'
import Waiting from './views/AfterToken/Waiting'
import LayoutToken from './views/LayoutToken'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Join',
    component: Join
  },
  {
    path: '/:code/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/:code',
    component: LayoutToken, // After player have token
    beforeEnter: function (to, from, next) {
      next()
    },
    children: [
      {
        path: 'wait',
        name: 'WaitingRoom',
        component: Waiting
      }
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
