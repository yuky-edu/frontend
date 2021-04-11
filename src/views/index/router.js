import Vue from 'vue'
import VueRouter from 'vue-router'
import Global from './variable'
import NProgress from 'nprogress'

import Home from './views/Home.vue'
import AuthLayout from './views/AuthLayout.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    component: AuthLayout,
    beforeEnter: function (to, from, next) {
      const token = window.$cookies.get(Global.TOKEN)
      if (token) window.location.href = '/host'
      else next()
    },
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      }
    ]
  },
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
