import Vue from 'vue'
import Package from '/package.json'

const variable = {

	api_url: Package['api-url'],

}

Vue.prototype._var = variable
Vue.prototype.API_URL = Package['api-url']

export default variable;