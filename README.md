# SBTI 测试（镜像）

图片和 HTML 已拆分。

地址：https://sbti.unun.dev  
原作者：[B站@蛆肉儿串儿](https://www.bilibili.com/video/BV1LpDHByET6/)

## Cloudflare Workers 部署

本项目已添加 `wrangler` 配置，可直接作为 Worker 静态资源站点部署。

说明：执行 `npm run dev` 或 `npm run deploy` 时，会先自动把 `index.html` 和 `image/` 复制到 `.dist/`，再由 Worker 发布。

### 1) 安装依赖

```bash
npm install
```

### 2) 登录 Cloudflare（首次需要）

```bash
npx wrangler login
```

### 3) 本地预览

```bash
npm run dev
```

默认会在本地启动预览服务（Wrangler 会输出访问地址）。

### 4) 部署到 Cloudflare Workers

```bash
npm run deploy
```

部署成功后会输出 Worker 访问地址。
