# 🚀 快速上手指南

## 零、安装像素字体（必需，2分钟）

⚠️ **重要**：项目使用本地字体，必须先安装字体文件才能正常显示。

### 安装步骤：

1. **下载字体**: https://fonts.google.com/specimen/Pixelify+Sans
   - 点击右上角 **"Download family"** 按钮

2. **解压 ZIP 文件**
   - 找到 `static` 文件夹
   - 复制 `PixelifySans-Regular.ttf` 文件

3. **放置字体文件**
   - 粘贴到项目的 `/public/fonts/` 文件夹

4. **完成！** 启动开发服务器即可

📖 **详细教程**: 查看 `/FONT_INSTALL.md` 文件

---

## 一、本地运行网站（5分钟）

### 1. 安装必要软件
- 下载并安装 [Node.js](https://nodejs.org/) （推荐LTS版本）
- 下载并安装 [VSCode](https://code.visualstudio.com/)
- 下载并安装 [Git](https://git-scm.com/)

### 2. 打开项目
**方法A - 使用VSCode：**
1. 打开 VSCode
2. 点击 `文件` → `打开文件夹`
3. 选择你的项目文件夹

**方法B - 使用命令行：**
```bash
cd 你的项目路径
code .
```

### 3. 安装依赖
在 VSCode 中按 `` Ctrl + ` `` 打开终端，输入：
```bash
npm install
```

### 4. 启动网站
```bash
npm run dev
```

打开浏览器访问：`http://localhost:5173/`

---

## 二、上传博客文章（3分钟）

### 在网页上操作：

1. **选择板块**
   - 点击 **PLAY**（粉色）
   - 或 **Study**（紫色）
   - 或 **Assessment**（深紫色）

2. **点击"Upload Blog"按钮**（右上角）

3. **输入密码**：`940124`

4. **填写博客内容**：
   - **标题**（必填）
   - **正文内容**（必填，支持换行）
   - **添加图片**（可选）：
     - 方法1：点击 **"Upload"** 上传本地图片
     - 方法2：粘贴图片网址 → 点击 **"Add"**
     - 可以添加多张图片
   - **视频链接**（可选）：粘贴YouTube等视频链接

5. **点击"Publish"发布**

✅ 博客已保存到本地浏览器！

### 编辑/删除博客：
- **编辑**：点击博客下方的 "Edit" 按钮
- **删除**：点击博客下方的 "Delete" 按钮
- 都需要输入密码：`940124`

---

## 三、部署到GitHub（10分钟）

### 第一次部署：

#### 1. 在GitHub创建仓库
1. 访问 [github.com](https://github.com)，登录账号
2. 点击右上角 **"+"** → **"New repository"**
3. 填写信息：
   - Repository name: `pixel-player` （可自定义）
   - 选择 **Public**
   - ❌ 不要勾选 "Add a README file"
4. 点击 **"Create repository"**

#### 2. 上传代码到GitHub
在 VSCode 终端中执行：

```bash
# 初始化Git
git init

# 添加所有文件
git add .

# 创建第一次提交
git commit -m "Initial commit"

# 连接到GitHub（替换YOUR_USERNAME为你的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/pixel-player.git

# 推送代码
git branch -M main
git push -u origin main
```

#### 3. 安装部署工具
```bash
npm install --save-dev gh-pages
```

#### 4. 修改配置文件

打开 `package.json`，在 `"scripts"` 部分添加：

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

#### 5. 创建配置文件

在项目根目录创建 `vite.config.ts` 文件：

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pixel-player/',  // 改为你的仓库名
  plugins: [react()],
})
```

#### 6. 部署到GitHub Pages
```bash
npm run deploy
```

等待1-2分钟，访问：
```
https://你的GitHub用户名.github.io/pixel-player/
```

🎉 网站已上线！

---

## 四、日常更新流程

### A. 更新博客内容：

1. **本地运行网站**：`npm run dev`
2. **在网页上传博客**（方法见"二、上传博客文章"）
3. **导出数据**：
   - 在博客页面点击 **"Export Data"**
   - 保存JSON文件
4. **更新初始数据**：
   - 打开 `src/data/play-data.json`（或对应板块的文件）
   - 复制导出的JSON内容，粘贴替换整个文件
   - 保存文件

### B. 部署更新到GitHub：

```bash
# 1. 保存所有修改
git add .

# 2. 提交更改
git commit -m "更新博客内容"

# 3. 推送到GitHub
git push origin main

# 4. 部署到网站
npm run deploy
```

等待1-2分钟，刷新网站即可看到更新！

---

## 五、常用命令速查

```bash
# 启动本地开发
npm run dev

# 安装依赖
npm install

# 构建生产版本
npm run build

# 部署到GitHub Pages
npm run deploy

# Git 命令
git add .                    # 添加所有修改
git commit -m "说明信息"      # 提交修改
git push origin main         # 推送到GitHub
```

---

## 六、数据备份与恢复

### 备份数据（重要！）

1. 在博客页面点击 **"Export Data"** 按钮
2. 下载的JSON文件保存到安全位置
3. **建议定期备份**（每次更新博客后）

### 恢复数据

1. 在博客页面点击 **"Import Data"** 按钮
2. 选择之前导出的JSON文件
3. 数据立即恢复

⚠️ **注意**：清除浏览器缓存会删除博客数据，请务必定期导出备份！

---

## 七、常见问题

**Q: 找不到 `npm` 命令？**
A: 需要先安装 Node.js

**Q: 像素风格字体不显示？**
A: 确保：
1. 字体文件 `PixelifySans-Regular.ttf` 已放入 `/public/fonts/` 文件夹
2. 文件名完全一致（区分大小写）
3. 已重启开发服务器（`npm run dev`）
4. 清除浏览器缓存后刷新页面
5. 按 F12 打开浏览器控制台，查看是否有字体加载错误

**Q: 本地博客上传后，GitHub网站上看不到？**
A: 需要导出数据 → 更新 `src/data/*.json` 文件 → 重新部署

**Q: 如何修改密码？**
A: 搜索代码中的 `940124`，改为你想要的密码

**Q: 图片无法显示？**
A: 
- 本地图片：使用"Upload"按钮上传
- 网络图片：确保URL可访问
- 建议使用本地上传（转为base64存储）

**Q: 端口被占用？**
A: 使用不同端口：`npm run dev -- --port 3000`

---

## 八、文件结构说明

```
项目文件夹/
├── src/
│   ├── components/          # 页面组件
│   │   ├── HomePage.tsx     # 首页
│   │   ├── PlayPage.tsx     # Play板块
│   │   ├── StudyPage.tsx    # Study板块
│   │   └── AssessmentPage.tsx  # Assessment板块
│   ├── data/                # 初始博客数据
│   │   ├── play-data.json
│   │   ├── study-data.json
│   │   └── assessment-data.json
│   └── App.tsx              # 主程序入口
├── package.json             # 项目配置
├── README.md                # 详细文档
└── QUICK_START.md           # 本文件（快速指南）
```

---

## 🎯 核心流程总结

### 本地开发 → 更新博客 → 部署上线

```
1. npm run dev              (启动本地开发)
   ↓
2. 网页上传博客              (密码: 940124)
   ↓
3. Export Data              (导出数据备份)
   ↓
4. 更新 src/data/*.json     (复制JSON内容)
   ↓
5. git add .                (保存修改)
   git commit -m "更新"
   git push origin main
   ↓
6. npm run deploy           (部署到GitHub Pages)
   ↓
7. 访问网站查看              (1-2分钟后生效)
```

---

## 📞 联系方式

Email: Hozierdrew@gmail.com

---

**祝使用愉快！** 🎉