# AIIS ICS Architecture Handbook

[English](README.md)

AIIS ICS 架构知识手册。从 `aiis-ics-arch` 的实现中提炼设计思想，解释为什么这样设计、源码如何工作，以及 Python / Rust / C# 如何表达相同的架构意图。文章以可追溯的实现证据讲清工程边界、设计取舍与可复用原则。

`aiis-ics-arch` 负责工业系统实现，本仓库负责手册内容与阅读体验。Vue / Vite 支撑内容展示与发布，目标发布平台是 GitHub Pages。

## 写作与发布

目标流程是：本地编辑 `content/` 下的 Markdown → `pnpm dev` 预览 → 获授权后提交并推送 → GitHub Actions 构建 → GitHub Pages 更新。网站提供只读阅读。

当前站点保留 Vite 官方 `vue-ts` 示例。文章读取、阅读界面和 Pages 部署尚未接入；已有研究笔记保留原目录。

`content/` 目录纳入 Git，目前仅包含 `.gitkeep` 占位文件。正式文章原稿直接在此维护为 Markdown；创建目录本身尚未接入文章读取功能。

## 本地命令

初始化时使用 Node.js 22.19.0 和 pnpm 11.11.0 完成验证。后续遵循本仓库的包管理器声明与锁文件。

```sh
pnpm install
pnpm dev
```

打开 Vite 输出的地址，默认是 `http://localhost:5173/aiis-ics-architecture-handbook/`。基础路径与 GitHub Pages 仓库站点一致。保存源文件后，预览页面自动更新。

```sh
pnpm build
pnpm preview
```

构建先执行 Vue / TypeScript 检查，再生成 `dist/`。生产预览默认地址为 `http://localhost:4173/aiis-ics-architecture-handbook/`，以命令实际输出为准。`dist/` 和 `node_modules/` 已加入 Git 忽略规则。

## 仓库目录

| 路径 | 用途 |
| --- | --- |
| `AGENTS.md`（本机保留，Git 忽略） | 中文 canonical 项目边界与行为规则 |
| `.codex/`（本机保留，Git 忽略） | AIIS 角色副本、工作流与 shared-skill 入口 |
| `PLAN.md` / `PLAN.zh-CN.md` | 当前任务索引 |
| `plans/` | 按阶段形成的任务规格、实施记录与验证记录 |
| `content/` | Markdown 文章源；当前由 `.gitkeep` 保留空目录 |
| `src/` | Vue 展示组件、应用入口与样式 |
| `public/` | 公开静态资源 |
| `index.html`、`vite.config.ts`、`tsconfig*.json` | 站点入口与构建配置 |
| `CODE_INDEX.md` | 代码索引 |
| `AIIS ICS Architecture Handbook/` | 已有研究笔记，与公开文章分别保留 |

协作入口：[任务索引](PLAN.zh-CN.md)、[任务目录](plans/README.zh-CN.md)。本机协作规则和配置说明位于 `AGENTS.md` 与 `.codex/README.zh-CN.md`；这些本地文件由 Git 忽略，网站构建不依赖它们。

模板参考：[Vite 入门](https://vite.dev/guide/) · [Vue TypeScript 指南](https://vuejs.org/guide/typescript/overview.html#project-setup)。
