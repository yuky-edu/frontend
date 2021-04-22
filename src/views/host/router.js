import Vue from 'vue'
import VueCookies from 'vue-cookies'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import Global from './variable'
import Axios from 'axios'

import Layout from './views/Layout'
import Dashboard from './views/Dashboard'
import ClassLayout from './views/Class/Layout'
import PlayLayout from './views/Play/Layout'
import ClassList from './views/Class/List'
import ClassDetail from './views/Class/Detail'
import EditEntityLayout from './views/Class/EditEntityLayout'

Vue.use(VueRouter)
Vue.use(VueCookies)

const routes = [{
  path: '/',
  component: Layout,
  beforeEnter: function(to, from, next) {
    Axios.get(Global.API_URL + '/auth/checkToken', {
        params: {
          token: window.$cookies.get(Global.TOKEN)
        }
      })
      .then(res => {
        if (!res.data.status) {
          window.$cookies.remove(Global.TOKEN)
          window.location.href = '/#/auth/login'
        } else next()
      })
  },
  children: [{
    path: '',
    name: 'Dashboard',
    component: Dashboard
  }, {
    path: 'class',
    component: ClassLayout,
    children: [{
        path: '',
        name: 'ClassList',
        component: ClassList
      }, {
        path: ':code',
        name: 'ClassDetail',
        component: ClassDetail
      },{
        path: ':code/:id',
        name: 'EditEntityLayout',
        component: EditEntityLayout
      }]
  }, {
    path: 'play',
    name: 'Play',
    component: PlayLayout,
    meta: {
      clearLayout: true
    },
    beforeEnter: function(to, from, next) {
      // middleware here
      next()
    },
  }]
}]

const router = new VueRouter({
  // mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start();
  NProgress.set(0.5);
  next();
})

router.afterEach(() => {
  setTimeout(() => NProgress.done(), 20)
})

export default router
