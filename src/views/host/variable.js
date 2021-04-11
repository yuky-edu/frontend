import Vue from 'vue'
import Global from '/global'

Vue.prototype.Global = Global
Vue.prototype.API_URL = Global.API_URL
Vue.prototype.TOKEN = Global.TOKEN

export default Global
