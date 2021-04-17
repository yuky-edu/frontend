import Vue from 'vue'
import VueCookies from 'vue-cookies'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import Global from './variable'
import Axios from 'axios'

import Layout from './views/Layout'
import Dashboard from './views/Dashboard'
import ClassLayout from './views/Class/Layout'

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
      name: 'Class',
      component: ClassLayout
    }
  ]
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
