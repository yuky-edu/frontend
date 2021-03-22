import Vue from "vue"
import VueRouter from "vue-router"

import LandingPage from './views/LandingPage.vue'

const rules = [
{
	path : "/",
	component : LandingPage
}
]

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: rules
})

export default router;