import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 引入路由配置
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // ✅ 改成这个路径

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')