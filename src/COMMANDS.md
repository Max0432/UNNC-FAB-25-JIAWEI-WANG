# 📋 常用命令速查表

## 🚀 本地开发

```bash
# 安装所有依赖（第一次运行项目时）
npm install

# 启动开发服务器
npm run dev

# 打开浏览器访问
http://localhost:5173/
```

---

## 🏗️ 构建和预览

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

---

## 🌐 部署到GitHub Pages

```bash
# 自动构建并部署（推荐）
npm run deploy

# 手动步骤：
# 1. 构建
npm run build

# 2. 部署
npx gh-pages -d dist
```

---

## 📦 Git 版本控制

### 首次设置

```bash
# 初始化Git仓库
git init

# 添加远程仓库（替换YOUR_USERNAME和REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 查看远程仓库
git remote -v
```

### 日常提交

```bash
# 查看文件状态
git status

# 添加所有修改的文件
git add .

# 添加特定文件
git add src/components/HomePage.tsx

# 提交修改（附带说明信息）
git commit -m "更新博客内容"

# 推送到GitHub
git push origin main

# 第一次推送（设置上游分支）
git push -u origin main
```

### 查看历史

```bash
# 查看提交历史
git log

# 查看简洁历史
git log --oneline

# 查看最近3条记录
git log -3
```

---

## 🔍 调试和检查

```bash
# 检查Node.js版本
node --version

# 检查npm版本
npm --version

# 检查Git版本
git --version

# 清除npm缓存
npm cache clean --force

# 重新安装依赖
rm -rf node_modules package-lock.json
npm install
```

---

## 📝 修改密码

在以下文件中搜索 `940124` 并替换为新密码：

- `src/components/BlogUpload.tsx`
- `src/components/BlogEdit.tsx`

```bash
# 使用VSCode全局搜索（Ctrl+Shift+F）
# 搜索: 940124
# 替换为: 你的新密码
```

---

## 🗂️ 文件操作

```bash
# 打开项目文件夹
cd path/to/your/project

# 用VSCode打开当前文件夹
code .

# 创建新文件
touch filename.tsx

# 删除文件
rm filename.tsx

# 创建新文件夹
mkdir foldername

# 列出所有文件
ls -la
```

---

## 🆘 紧急修复

### 端口被占用

```bash
# 使用不同端口启动
npm run dev -- --port 3000
npm run dev -- --port 8080
```

### 构建错误

```bash
# 清除构建缓存
rm -rf dist
npm run build

# 重新安装依赖
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Git冲突

```bash
# 放弃本地修改，使用远程版本
git fetch origin
git reset --hard origin/main

# 保存当前修改到暂存区
git stash
git pull origin main
git stash pop
```

---

## 📊 完整工作流程

### 开发新功能

```bash
1. npm run dev                      # 启动开发服务器
2. (在浏览器中上传博客内容)
3. 点击 "Export Data" 导出数据
4. 更新 src/data/*.json 文件
5. git add .
6. git commit -m "添加新博客内容"
7. git push origin main
8. npm run deploy                   # 部署到GitHub Pages
```

### 快速部署

```bash
# 一键部署（前提：已经提交到Git）
npm run deploy && echo "部署完成！"
```

### 完整更新流程

```bash
# Step 1: 提交代码
git add .
git commit -m "更新内容"
git push origin main

# Step 2: 部署
npm run deploy

# Step 3: 验证（1-2分钟后）
# 访问: https://你的用户名.github.io/仓库名/
```

---

## 🎯 VSCode 快捷键

```
Ctrl + `          打开/关闭终端
Ctrl + P          快速打开文件
Ctrl + Shift + P  命令面板
Ctrl + Shift + F  全局搜索
Ctrl + B          显示/隐藏侧边栏
Ctrl + S          保存文件
Ctrl + /          注释/取消注释
Alt + ↑/↓         移动行
```

---

## 📞 常见问题解决

| 问题 | 命令 |
|------|------|
| npm命令找不到 | 安装 Node.js |
| 端口被占用 | `npm run dev -- --port 3000` |
| 依赖安装失败 | `npm cache clean --force && npm install` |
| Git推送失败 | `git pull origin main` 然后再 `git push` |
| 网站404错误 | 检查 vite.config.ts 中的 base 路径 |

---

## 🔗 有用的链接

- **Node.js下载**: https://nodejs.org/
- **Git下载**: https://git-scm.com/
- **VSCode下载**: https://code.visualstudio.com/
- **GitHub**: https://github.com/
- **React文档**: https://react.dev/

---

**保存这个文件以便随时查阅！** 📌
