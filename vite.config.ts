/**
 * 文件路径: /vite.config.ts
 * 功能描述: Vite 项目配置。
 * 主要功能:
 *   - 启用 Vue 单文件组件支持。
 *   - 配置 GitHub Pages 仓库站点的基础路径。
 */
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/aiis-ics-architecture-handbook/',
  plugins: [vue()],
})
