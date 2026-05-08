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
