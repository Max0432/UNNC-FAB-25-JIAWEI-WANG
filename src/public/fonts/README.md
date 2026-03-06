# 字体文件夹

⚠️ **重要**：本项目使用本地字体，必须将字体文件放入此文件夹。

---

## 📥 下载字体

### 推荐字体: Pixelify Sans
- **下载地址**: https://fonts.google.com/specimen/Pixelify+Sans
- **GitHub**: https://github.com/eifetx/Pixelify-Sans
- **授权**: SIL Open Font License（免费商用）

#### 下载步骤：
1. 访问 https://fonts.google.com/specimen/Pixelify+Sans
2. 点击右上角 "Download family" 按钮
3. 解压下载的 ZIP 文件
4. 在 `static` 文件夹中找到 `.ttf` 文件

---

## 📂 文件放置位置

将下载的字体文件放在 **这个文件夹**（`/public/fonts/`）中。

### Pixelify Sans 所需文件：

请将以下文件放入此文件夹：

```
/public/fonts/
├── PixelifySans-Regular.ttf         （必需）
├── PixelifySans-Medium.ttf          （可选）
├── PixelifySans-SemiBold.ttf        （可选）
├── PixelifySans-Bold.ttf            （可选）
└── README.md                        （本文件）
```

**只需要 `PixelifySans-Regular.ttf` 这一个文件就够了！**

---

## 🎯 详细下载教程

### 方法 1: 从 Google Fonts 下载（推荐）

1. **访问**: https://fonts.google.com/specimen/Pixelify+Sans

2. **点击 "Download family"**（右上角蓝色按钮）

3. **解压 ZIP 文件**
   - Windows: 右键 → 解压全部
   - Mac: 双击 ZIP 文件

4. **找到字体文件**
   - 打开解压后的文件夹
   - 进入 `static` 文件夹
   - 找到 `PixelifySans-Regular.ttf`

5. **复制到项目**
   - 复制 `PixelifySans-Regular.ttf`
   - 粘贴到项目的 `/public/fonts/` 文件夹

6. **完成！** 重启开发服务器（`npm run dev`）

---

### 方法 2: 从 GitHub 下载

1. **访问**: https://github.com/eifetx/Pixelify-Sans

2. **点击 "Code" → "Download ZIP"**

3. **解压并找到字体文件**
   - 进入 `fonts/ttf/` 文件夹
   - 复制 `PixelifySans-Regular.ttf`

4. **粘贴到** `/public/fonts/` 文件夹

---

## ✅ 验证安装

字体文件放置正确后，文件夹结构应该是：

```
你的项目/
├── public/
│   ├── fonts/
│   │   ├── PixelifySans-Regular.ttf  ← 字体文件在这里
│   │   └── README.md
│   └── data/
├── src/
├── styles/
└── package.json
```

---

## 🔄 应用字体

放置字体文件后：

1. **重启开发服务器**:
   ```bash
   # 按 Ctrl+C 停止服务器
   # 然后重新启动
   npm run dev
   ```

2. **清除浏览器缓存** 并刷新页面

3. **检查字体** 是否正确显示

---

## 🆘 常见问题

**Q: 字体文件放好了但还是不显示？**
A: 
1. 检查文件名是否完全一致（区分大小写）
2. 重启开发服务器
3. 清除浏览器缓存（Ctrl+Shift+Delete）
4. 检查浏览器控制台是否有错误（F12）

**Q: 找不到 .ttf 文件？**
A: 
- 确保解压了 ZIP 文件
- 进入 `static` 或 `ttf` 子文件夹查找
- 文件扩展名是 `.ttf` 或 `.otf`

**Q: 可以使用其他像素字体吗？**
A: 
- 可以！修改 `/styles/globals.css` 中的字体名称
- 确保字体文件名和CSS中的名称匹配

---

## 📝 其他像素风格字体推荐

如果想尝试其他字体：

1. **Press Start 2P** - 经典8位游戏风格
   - https://fonts.google.com/specimen/Press+Start+2P

2. **VT323** - 复古终端风格
   - https://fonts.google.com/specimen/VT323

3. **DotGothic16** - 日系像素风格
   - https://fonts.google.com/specimen/DotGothic16

4. **Silkscreen** - 简洁像素风格
   - https://fonts.google.com/specimen/Silkscreen

---

**下载后放入此文件夹即可！** 📁