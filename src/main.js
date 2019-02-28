// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import 'styles/reset.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts 

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
