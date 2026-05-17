# rob11304220-jpg.github.io

纯 HTML / CSS / JS 单页个人站点，由默认分支根目录直接托管。

## 本地预览

用浏览器打开仓库根目录下的 `index.html`，或使用任意静态文件服务器，例如：

```bash
npx serve .
```

## 部署

推送至 `main` 后，GitHub Actions（`.github/workflows/deploy.yml`）会把 `index.html` 与 `css/`、`js/`、`assets/` 复制到临时目录并发布，避免将 `.git` 等开发文件打进站点产物。仓库 **Settings → Pages** 中来源应为 **GitHub Actions**。

线上地址：<https://rob11304220-jpg.github.io>

## 编辑说明

- 页面结构：`index.html`
- 样式：`css/styles.css`
- 脚本：`js/main.js`
- 图标：`assets/favicon.svg`

## 页面页眉 / 页脚约定 (Page header / footer convention)

**Source of truth:** [`index.html`](index.html) — the visible text inside `<header class="site-header">` and `<footer class="site-footer">` must match on every new page. Only **relative `href` values** and **`aria-current="page"`** on the active nav item change by depth.

- **Skip link:** `Skip to main content` → `href="#main"`
- **Logo:** text `Luobin Liao`; `href` to homepage: `index.html` (root), `../index.html` (under `blog/`), `../../index.html` (under `blog/posts/`)
- **Nav:** `aria-label="In-page navigation"`; menu toggle SR text `Open menu`
- **Nav links (order):** About → Blog → Projects → Contact  
  - About / Projects / Contact: `<homepage>#about`, `#projects`, `#contact`  
  - Blog: `blog/`, `./`, or `../` from post pages  
  - Put `aria-current="page"` on the link for the current section (e.g. Blog on all `blog/` pages)
- **Footer:** `© <span id="year"></span> Luobin Liao. All rights reserved.` — year is filled by `js/main.js` (`#year`)

**Canonical blocks** (root paths; adjust `href` as above):

```html
<header class="site-header">
  <div class="site-header__inner">
    <a class="logo" href="index.html">Luobin Liao</a>
    <!-- nav-toggle ... -->
    <nav class="site-nav" id="site-nav" aria-label="In-page navigation">
      <ul class="site-nav__list">
        <li><a href="#about">About</a></li>
        <li><a href="blog/">Blog</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>

<footer class="site-footer">
  <div class="site-footer__inner">
    <p class="site-footer__copy">© <span id="year"></span> Luobin Liao. All rights reserved.</p>
  </div>
</footer>
```

When adding a page, copy these regions from `index.html` and update paths + active marker only.

## 博客文章 (Blog posts)

**Layout**

| Role | Path |
|------|------|
| Listing | [`blog/index.html`](blog/index.html) |
| Post | `blog/posts/<slug>.html` |
| Scaffold | [`blog/posts/_template.html`](blog/posts/_template.html) (copy and rename; do not link from the listing) |

**Per-post fields** (must match between listing card and post page):

- `POST_TITLE` — article title (`<h1>`, `<title>`, list link text)
- `POST_EXCERPT` — list excerpt and post `<meta name="description">`
- `POST_DATE_ISO` — `datetime` on `<time>` (e.g. `2026-05-17`)
- `POST_DATE_DISPLAY` — visible date (e.g. `2026 年 5 月 17 日`)

**Listing order:** insert each new `<li class="post-card">` at the **top** of `<ul class="post-list">` (newest first).

**Listing hero** on `blog/index.html` — fixed copy (do not paraphrase):

- `写作与笔记` / `博客` / `学习记录与想法。`

**Language split**

- **English (fixed):** site header/footer and nav — same as homepage (*页面页眉 / 页脚约定* above).
- **Chinese (editable):** blog hero, list cards, article body, back link `← 返回博客列表`.

**Paths by depth**

- `blog/index.html`: `../index.html`, `../css/`, `../js/`
- `blog/posts/*.html`: `../../index.html`, `../../css/`, `../../js/`; Blog nav `href="../"` with `aria-current="page"`

**Pre-publish checklist**

- List `href` matches post filename
- No broken links to removed posts
- Open listing + post in a browser; test back link and mobile nav
