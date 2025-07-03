import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: '首页',
    component: Home
  },
  {
    path: '/about',
    name: '关于',
    component: About
  },
  {
    path:'/create',
    name: '农遗智创',
    component: () => import('../views/Create.vue')  
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router