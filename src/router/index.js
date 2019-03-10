import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Room from '../pages/room/Room'
import Book from '../pages/book/Book'
import Search from '../pages/search/Search'
import Center from '../pages/center/Center'
Vue.use(Router)

export default new Router({
  mode:'history',
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
    }
  ]
})
