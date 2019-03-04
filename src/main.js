// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts 
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App),
  template: '<App/>'
})
