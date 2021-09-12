import Vue from 'vue'
import VueRouter from 'vue-router'
import mine from './mine'
import cinema from './cinema'
import film from './film'

Vue.use(VueRouter)

const routes = [
  film,
  cinema,
  mine,
  {
    path: '*',
    redirect: '/film'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
