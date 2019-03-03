import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Room from '../pages/room/Room'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/room',
      name: 'Room',
      component: Room
    }

  ]
})
