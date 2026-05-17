# DKPCB 第一阶段：SEO 基础建设执行指南

## ✅ 已完成（代码层面）

以下文件已自动生成并提交至代码仓库，可以直接部署：

| 文件 | 作用 |
|------|------|
| `src/app/sitemap.ts` | 自动生成 sitemap.xml，含所有主页面 |
| `src/app/robots.ts` | 生成 robots.txt，屏蔽 admin/login 等敏感页面 |
| `src/app/layout.tsx` | 升级完整 SEO metadata + Organization/WebSite Schema |
| `src/app/page.tsx` | 首页添加 Service + FAQ Schema（提升搜索富摘要） |
| `src/app/about/metadata.ts` | About 页独立 metadata |
| `src/app/products/layout.tsx` | Products 页独立 metadata |
| `src/app/contact/layout.tsx` | Contact 页独立 metadata |

---

## 🚀 您现在需要手动完成的步骤

### Step 1：注册 Google Search Console（GSC）

1. 访问 [https://search.google.com/search-console](https://search.google.com/search-console)
2. 点击 **"添加资源"** → 选择 **"网域"**（推荐）或 **"网址前缀"**
3. 输入 `https://dkpcb.com` → 点击 **继续**
4. **验证方式**：选择 **"HTML 标记"**（最简单）
   - 复制 GSC 提供的 `<meta>` 验证代码
   - 告诉我验证码内容（在 `content="..."` 里），我帮你写入 `layout.tsx`
   - 重新部署后立即点击 GSC 的 **"验证"** 按钮
5. 验证成功后 → **"站点地图"** → 输入 `sitemap.xml` → 提交

---

### Step 2：设置 Google Analytics 4（GA4）

1. 访问 [https://analytics.google.com](https://analytics.google.com)
2. **创建账号** → 账号名称：`DKPCB`
3. **设置媒体资源** → 媒体资源名称：`dkpcb.com`
4. **选择业务目标** → 勾选"生成潜在客户"
5. **设置数据流** → 选择 **"网站"**
   - 网站地址：`https://dkpcb.com`
   - 数据流名称：`DKPCB Web`
6. 复制 **衡量 ID**（格式：`G-XXXXXXXXXX`）
7. **把衡量 ID 告诉我**，我帮你写入 `layout.tsx` 添加 GA4 跟踪代码

---

### Step 3：PageSpeed Insights 检测（Core Web Vitals）

1. 访问 [https://pagespeed.web.dev](https://pagespeed.web.dev)
2. 输入 `https://dkpcb.com` → 点击 **分析**
3. 查看 **"Core Web Vitals 评估"** 是否通过
4. 如未通过，截图发给我 → 我帮你针对性优化

---

### Step 4：生成 OG 图片（社交媒体预览）

- 当前代码中 OG 图片路径为 `/og-image.png`
- 需要生成一张 **1200×630px** 的 OG 图片放到 `public/` 目录
- 图片内容建议：DKPCB Logo + "Professional PCB Manufacturing" 文字 + 科技感背景
- **如果您没有设计资源，我可以帮您生成一张**

---

## 📋 后续步骤时间线

| 时间 | 动作 |
|------|------|
| 今天 | 完成 Step 1-2（GSC + GA4 配置） |
| 第3天 | 确认 GSC 中 sitemap 已索引，GA4 有数据 |
| 第7天 | 运行 PageSpeed Insights 检测并优化 |
| 第14天 | 开始第二阶段：关键词研究与内容规划 |

---

## ❓ 需要您提供的信息

1. **GSC 验证 meta 标签**（按 Step 1 操作后复制给我）
2. **GA4 衡量 ID**（按 Step 2 操作后复制给我，格式 `G-XXXXXXXXXX`）
3. **是否需要我生成 OG 图片**（`/og-image.png`）

> 完成以上信息提供后，我会立即写入代码并推送部署。
