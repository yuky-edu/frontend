import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from './views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
{
    path: '/host',
    name: 'Dashboard',
    component: Dashboard
},
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
