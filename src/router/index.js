import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Material from '../views/Material.vue'
import Create from '../views/Create.vue'
import Gene from '../views/gene.vue'
import sangjiyutang from '../views/sangjiyutang.vue'
import { pa } from 'element-plus/es/locales.mjs'

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
    path:'/gene',
    name: '农遗基因',
    component: Gene
  },
  {
    path:'/create',
    name: '农遗AI智创',
    component: Create
  },
  {
    path:'/material',
    name: '素材库',
    component: Material
  },
  
  {
    path:'/sangjiyutang',
    name: '桑基鱼塘',
    component: sangjiyutang
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router