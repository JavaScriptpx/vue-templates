import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home/Home.vue') //路由懒加载
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About/About.vue') //路由懒加载
  },

]

const router = new VueRouter({
  routes
})

export default router