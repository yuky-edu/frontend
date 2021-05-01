import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import Global from './variable'

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
    component: Profile,
    beforeEnter: function (to, from, next) {
      // if (window.$cookies.get(Global.TOKEN)) {
        next()
      // }
    }
  },
  {
    path: '/:code',
    name: 'LayoutToken',
    component: LayoutToken, // After player have token
    beforeEnter: function (to, from, next) {
      if (!window.$cookies.get(Global.TOKEN)) {
        next({
          name: 'Join'
        })
      }
      else {
        store.dispatch('player/getMyInfo').then(res => {
          if (res.status) {
            next()
          }
          else next({
            name: 'Join'
          })
        }).catch(() => {
          next({
            name: 'Join'
          })
          window.$cookies.remove(Global.TOKEN)
        })
      }
    }
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
