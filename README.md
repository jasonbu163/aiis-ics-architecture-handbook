# AIIS ICS Architecture Handbook

[中文](README.zh-CN.md)

An architecture handbook that distills the implementation ideas of `aiis-ics-arch`: why the design exists, how the code works, and how Python, Rust, and C# express the same architectural intent. Articles explain engineering boundaries, tradeoffs, and reusable principles with traceable implementation evidence.

`aiis-ics-arch` owns the industrial implementation. This repository owns the handbook and its reading experience. Vue / Vite supports presentation and publishing; GitHub Pages is the intended publication target.

## Authoring and publishing

The intended flow is: edit Markdown in `content/` locally, preview with `pnpm dev`, then use an authorized Git push to trigger GitHub Actions and publish the built site to GitHub Pages. The website is a read-only publication.

The current site retains the official Vite `vue-ts` example. Article loading, the reading interface, and Pages deployment have yet to be connected. Existing research notes remain in their original directory.

The `content/` directory is tracked in Git and currently contains only a `.gitkeep` placeholder. Maintain article originals as Markdown files here; creating the directory does not yet enable article loading.

## Local commands

The initial setup was verified with Node.js 22.19.0 and pnpm 11.11.0. Follow the package manager declaration and lockfile in this repository.

```sh
pnpm install
pnpm dev
```

Open the address printed by Vite, normally `http://localhost:5173/aiis-ics-architecture-handbook/`. The base path matches the GitHub Pages project site. Saved source changes update the preview.

```sh
pnpm build
pnpm preview
```

The build runs Vue / TypeScript checks and generates `dist/`. Production preview normally uses `http://localhost:4173/aiis-ics-architecture-handbook/`; use the actual address printed by the command. `dist/` and `node_modules/` are ignored by Git.

## Repository map

| Path | Purpose |
| --- | --- |
| `AGENTS.md` (local, Git-ignored) | Chinese canonical project scope and working rules |
| `.codex/` (local, Git-ignored) | AIIS role copies, workflow and shared-skill entrypoints |
| `PLAN.md` / `PLAN.zh-CN.md` | Current task index |
| `plans/` | Staged task specifications, implementation records and verification |
| `content/` | Markdown article sources; `.gitkeep` preserves the currently empty directory |
| `src/` | Vue presentation components, entrypoint and styles |
| `public/` | Public static assets |
| `index.html`, `vite.config.ts`, `tsconfig*.json` | Site entrypoint and build configuration |
| `CODE_INDEX.md` | Code index |
| `AIIS ICS Architecture Handbook/` | Existing research notes, preserved separately from public content |

For collaboration, read the [task index](PLAN.md) and the [task catalog](plans/README.md). Local agent rules and setup instructions live in `AGENTS.md` and `.codex/README.md`; these local files are Git-ignored and are not required to build the site.

Template references: [Vite guide](https://vite.dev/guide/) · [Vue TypeScript guide](https://vuejs.org/guide/typescript/overview.html#project-setup).
