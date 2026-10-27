# 项目代码索引

## 应用代码

| 文件 | 功能 |
| --- | --- |
| `index.html` | HTML 入口，提供 Vue 挂载节点 |
| `src/main.ts` | 加载样式并启动 Vue 应用 |
| `src/App.vue` | 应用根组件，展示官方示例组件 |
| `src/components/HelloWorld.vue` | 官方示例页面、文档链接与响应式计数器，SVG 图标使用站点基础路径 |
| `src/style.css` | 示例页面的布局、主题和响应式样式 |

## 项目配置

| 文件 | 功能 |
| --- | --- |
| `vite.config.ts` | 注册 Vue 插件，配置 GitHub Pages 仓库站点的基础路径 |
| `package.json` | 项目信息、运行命令及依赖 |
| `pnpm-lock.yaml` | 锁定项目依赖版本 |
| `tsconfig.json` | 引用应用与构建配置的 TypeScript 项目 |
| `tsconfig.app.json` | Vue 应用的类型检查配置 |
| `tsconfig.node.json` | Vite 配置文件的类型检查配置 |

## 静态资源

- `src/assets/`：官方模板的 Vue / Vite 标识和示例图片。
- `public/`：官方模板的站点图标与 SVG 图标集合。

新增、删除代码文件或修改文件职责时，同步更新对应头部注释与本索引。
