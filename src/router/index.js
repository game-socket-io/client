import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainPage from '../views/MainPage.vue'
import Play from '../views/Play.vue'
import Lobby from '../views/Lobby.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/play',
    name: 'Play',
    component: Play
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mainpage',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/lobby/:name',
    name: 'Lobby',
    component: Lobby
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
