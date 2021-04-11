import Vue from 'vue'
import vueCookies from 'vue-cookies'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import Global from './variable'
import Axios from 'axios'

import Layout from './views/Layout.vue'
import Dashboard from './views/Dashboard.vue'

Vue.use(VueRouter)
Vue.use(vueCookies)

const routes = [
  {
    path: '/',
    component: Layout,
    beforeEnter: function (to, from, next) {
      Axios.get(Global.API_URL + '/auth/checkToken', {
        params: {
          token: window.$cookies.get(Global.TOKEN)
        }
      })
      .then(res => {
        if (!res.data.status) {
          window.$cookies.remove(Global.TOKEN)
          window.location.href = '/#/auth/login'
        }
        else next()
      })
    },
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard
      },
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start();
  NProgress.set(0.5);
  next();
});
router.afterEach(() => {
  setTimeout(() => NProgress.done(), 20);
});

export default router
