// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import store from './store/index'
import '../src/assets/style/public.scss'
import axios from './request/request.js';
import echarts from 'echarts'
import $ from 'jquery'


Vue.prototype.$echarts = echarts

Vue.prototype.$axios = axios;
// import api from './request/api'
// Vue.prototype.$api = api;
Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
