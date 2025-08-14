import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Material from '../views/Material.vue'
import Create from '../views/Create.vue'
import Gene from '../views/gene.vue'
import sangjiyutang from '../views/sangjiyutang.vue'
import toolbox from '../views/toolbox.vue'
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
  ,
  { 
    path: '/toolbox',
    name: '农遗工具箱',
    component: toolbox
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置（如浏览器前进/后退），则返回保存的位置
    if (savedPosition) {
      return savedPosition
    }
    // 否则滚动到顶部
    return { top: 0 }
  }
})

export default router