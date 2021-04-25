import Vue from 'vue'
import Global from '/yglobal'

Vue.prototype.Global = Global
Vue.prototype.API_URL = Global.API_URL
Vue.prototype.TOKEN = Global.TOKEN

export default Global
