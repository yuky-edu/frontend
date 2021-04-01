import Vue from 'vue'
import Global from '/global'

const variable = {

	api_url: Global.API_URL,

}

Vue.prototype._var = variable
Vue.prototype.API_URL = Global.API_URL

export default variable;
