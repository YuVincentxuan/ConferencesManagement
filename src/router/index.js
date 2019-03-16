import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Room from '../pages/room/Room'
import Book from '../pages/book/Book'
import Search from '../pages/search/Search'
import Center from '../pages/center/Center'
import Step from '../pages/step/Step'
import Log from '../pages/log/Log'
import Sign from '../pages/sign/Sign'
Vue.use(Router)

export default new Router({
  mode:'hash',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/room',
      name: 'Room',
      component: Room
    },{
      path: '/book',
      name: 'Book',
      component: Book
    },{
      path: '/search',
      name: 'Search',
      component: Search
    },{
      path: '/center',
      name: 'Center',
      component: Center
    },{
      path: '/step',
      name: 'Step',
      component: Step
    },{
      path: '/log',
      name: 'Log',
      component: Log
    },{
      path: '/sign',
      name: 'Sign',
      component: Sign
    }
  ]
})
