import Vue from 'vue'
import Global from '/yglobal'
Global["TOKEN"] = 'token'

Vue.prototype.Global = Global
Vue.prototype.API_URL = Global.API_URL
