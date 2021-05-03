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
    component: Join,
    beforeEnter: function (to, from, next) {
      // if (!window.$cookies.get('player_session')) {
        next()
      // }
      // else {
      //   next({
      //     name: 'Profile'
      //   })
      // }
    }
  },
  {
    path: '/:code/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: function (to, from, next) {
      if (window.$cookies.get('player_session') && !window.$cookies.get(Global.TOKEN)) {
        next()
      }
      else {
        next({
          name: 'LayoutToken',
          params: {
            code: to.params.code
          }
        })
      }
    }
  },
  {
    path: '/:code',
    name: 'LayoutToken',
    component: LayoutToken, // After player have token
    beforeEnter: function (to, from, next) {
      if (!window.$cookies.get(Global.TOKEN) || !window.$cookies.get('player_session')) {
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
          window.$cookies.remove('player_session')
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
