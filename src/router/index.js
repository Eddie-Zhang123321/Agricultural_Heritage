import { createRouter, createWebHistory } from 'vue-router'

// 使用动态导入实现路由懒加载
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Material = () => import('../views/Material.vue')
const Create = () => import('../views/Create.vue')
const Gene = () => import('../views/gene.vue')
const sangjiyutang = () => import('../views/sangjiyutang.vue')
const toolbox = () => import('../views/toolbox.vue')
const dilsey = () => import('../views/dilsey.vue')
const stubs = () => import('../views/Stub.vue')
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
  },
  {
    path:'/Dilsey',
    name: '荻小渔',
    component: dilsey
  },
  {
    path:'/stub',
    name:'票根',
    component: stubs
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