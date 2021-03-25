import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const _null = '-'

/**
* * Auth store
*/
const auth = {

	namespaced: true,

	state: {
		token: '',
	},

	getters: {
		//
	},

	mutations: {
		//
	}
}

export default new Vuex.Store({

	state: {
		app: 'Yuky Guest',
	},

	mutations: {
		//
	},

	actions: {
		//
	},

	modules: {
		auth
	},
})
