/**
 * 文件路径: /src/main.ts
 * 功能描述: Vue 应用入口。
 * 主要功能:
 *   - 加载全局样式并将根组件挂载到页面。
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
