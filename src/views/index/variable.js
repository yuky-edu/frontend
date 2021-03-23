import Vue from 'vue'

const variable = {

	api_url: "http://yuky.unitedpatent.id/api",

}

Vue.prototype._var = variable
Vue.prototype.API_URL = variable.api_url

export default variable;