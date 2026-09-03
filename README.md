# rob11304220-jpg.github.io

Luobin Liao 的个人主页与博客。网站使用 Astro 生成纯静态文件，并通过 GitHub Actions 发布到 GitHub Pages。

线上地址：<https://rob11304220-jpg.github.io>

## 本地开发

需要 Node.js 24 和 npm。

```bash
npm ci
npm run dev
```

提交前运行：

```bash
npm run verify
```

`npm run verify` 会检查 Astro 类型和内容、生成被 Git 忽略的 `dist/`，并验证所有生成页面中的本地链接和资源。可使用 `npm run preview` 检查生产构建。

## 项目结构

| 位置 | 用途 |
|---|---|
| `src/pages/` | 首页、博客列表和文章路由 |
| `src/components/` | 共享页眉、导航和页脚 |
| `src/layouts/` | 页面及文章布局 |
| `src/content/blog/` | 博客正文唯一来源 |
| `src/content.config.ts` | 博客 frontmatter 校验规则 |
| `src/styles/styles.css` | 全站样式 |
| `public/` | 图片、图标和原生浏览器脚本 |
| `scripts/` | 构建后链接与资源检查 |
| `dist/` | Astro 生成结果，不提交 |

## 新增博客文章

1. 创建 `src/content/blog/<slug>.md` 或 `.mdx`，slug 使用小写英文和连字符。
2. 添加经过 schema 校验的 frontmatter：

```yaml
---
title: 文章标题
description: 列表摘要和页面描述
publishedAt: 2026-05-17
dateDisplay: 2026 年 5 月 17 日
draft: false
math: false
---
```

3. 将发布图片放到 `public/blog/media/<slug>/`，并使用 `/blog/media/<slug>/...` 引用。
4. 运行 `npm run verify`。博客列表、文章页面、日期、摘要、元数据和 URL 都会自动生成。

已发布 slug 是永久 URL。当前文章继续输出为：

```text
/blog/posts/mls-local-curve-editing.html
```

需要公式时设置 `math: true`。MathJax 分隔符及复杂语义内容可以保留为 Markdown 条目中的 HTML；该条目仍是唯一正文来源。

## 页面结构

- 页眉、导航和页脚由共享 Astro 组件生成。
- 网站保持静态输出，不使用客户端框架 hydration。
- 移动导航继续复用 `public/js/main.js` 中的少量原生 JavaScript。
- `build.format: "preserve"` 同时保持目录型 `/blog/` 和已有 `.html` 文章 URL。
- 构建自动生成 `404.html`、sitemap 和 `robots.txt`。
- 共享布局统一生成 canonical、Open Graph、Twitter Card 和 JSON-LD 元数据。

## 后续方向

当前仓库只实现已需要的主页与博客能力。可选增强集中记录在 `docs/roadmap.md`，仅在后续个人项目或内容确有需求时实施。

## 部署边界

`.github/workflows/deploy.yml` 仅在推送到 `main` 或手动触发时构建并发布 `dist/`。未经明确授权，不得推送、合并、部署或修改 GitHub Pages 设置。
