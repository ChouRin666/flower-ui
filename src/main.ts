import { createApp } from 'vue'
import App from './App.vue'
// 导入 Element Plus 组件库
import ElementPlus from 'element-plus'
// 导入 routers 组件
import router from './routes'

// 导入 Element Plus 的样式
import 'element-plus/dist/index.css'

// 导入所有图标 
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// 全局注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// 使用 ElementPlus 依赖包
app.use(ElementPlus)
// 使用 router（路由）
app.use(router)
app.mount('#app')


