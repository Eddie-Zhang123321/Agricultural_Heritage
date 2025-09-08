import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 引入路由配置
// 按需导入Element Plus
import { ElCarousel, ElCarouselItem, ElRow, ElCol, ElCard } from 'element-plus'
import 'element-plus/es/components/carousel/style/css'
import 'element-plus/es/components/carousel-item/style/css'
import 'element-plus/es/components/row/style/css'
import 'element-plus/es/components/col/style/css'
import 'element-plus/es/components/card/style/css'

const app = createApp(App)

// 注册需要的组件
app.component(ElCarousel.name, ElCarousel)
app.component(ElCarouselItem.name, ElCarouselItem)
app.component(ElRow.name, ElRow)
app.component(ElCol.name, ElCol)
app.component(ElCard.name, ElCard)

app.use(router)
app.mount('#app')