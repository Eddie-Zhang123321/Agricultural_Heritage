import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// ✅ 引入 Element Plus 所需组件
import {
  ElCarousel,
  ElCarouselItem,
  ElRow,
  ElCol,
  ElCard,
  ElMenu,
  ElMenuItem,
  ElInput,    // 新增
  ElButton,   // 新增
  ElIcon      // 新增
} from 'element-plus'

// ✅ 引入对应样式
import 'element-plus/es/components/carousel/style/css'
import 'element-plus/es/components/carousel-item/style/css'
import 'element-plus/es/components/row/style/css'
import 'element-plus/es/components/col/style/css'
import 'element-plus/es/components/card/style/css'
import 'element-plus/es/components/menu/style/css'
import 'element-plus/es/components/menu-item/style/css'
import 'element-plus/es/components/input/style/css'   // 新增
import 'element-plus/es/components/button/style/css'  // 新增
import 'element-plus/es/components/icon/style/css'    // 新增

const app = createApp(App)

// ✅ 注册组件
app.component(ElCarousel.name, ElCarousel)
app.component(ElCarouselItem.name, ElCarouselItem)
app.component(ElRow.name, ElRow)
app.component(ElCol.name, ElCol)
app.component(ElCard.name, ElCard)
app.component(ElMenu.name, ElMenu)
app.component(ElMenuItem.name, ElMenuItem)
app.component(ElInput.name, ElInput)     // 新增
app.component(ElButton.name, ElButton)   // 新增
app.component(ElIcon.name, ElIcon)       // 新增

app.use(router)
app.mount('#app')
