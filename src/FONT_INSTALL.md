# 🎮 字体安装指南

⚠️ **重要提示**：本项目使用本地字体文件，必须先安装字体才能正常显示像素风格文字。

---

## 📥 第一步：下载字体

### 字体：**Pixelify Sans**

#### 方法 1：从 Google Fonts 下载（推荐）

1. **点击链接**: https://fonts.google.com/specimen/Pixelify+Sans

2. **下载字体包**:
   - 点击页面右上角的 **"Download family"** 按钮（蓝色）
   - 会下载一个 ZIP 文件

3. **解压文件**:
   - Windows: 右键点击 → 解压全部
   - Mac: 双击 ZIP 文件

4. **找到字体文件**:
   - 打开解压后的文件夹
   - 进入 `static` 文件夹
   - 你会看到多个 `.ttf` 文件

---

## 📂 第二步：放置字体文件

### 文件位置

将字体文件复制到项目的 **`/public/fonts/`** 文件夹中。

### 最简方案（只需1个文件）

**只需要复制这一个文件**：
```
PixelifySans-Regular.ttf
```

**复制到**：
```
你的项目文件夹/public/fonts/PixelifySans-Regular.ttf
```

### 完整方案（可选，支持不同字重）

如果想要更多字重效果，可以复制这些文件：
```
PixelifySans-Regular.ttf     （必需）
PixelifySans-Medium.ttf      （可选）
PixelifySans-SemiBold.ttf    （可选）
PixelifySans-Bold.ttf        （可选）
```

---

## 📁 最终文件结构

正确放置后，文件结构应该是：

```
你的项目/
├── public/
│   ├── fonts/
│   │   ├── PixelifySans-Regular.ttf    ← 字体文件在这里
│   │   ├── PixelifySans-Medium.ttf     ← 可选
│   │   ├── PixelifySans-SemiBold.ttf   ← 可选
│   │   ├── PixelifySans-Bold.ttf       ← 可选
│   │   └── README.md
│   └── data/
├── src/
├── components/
└── package.json
```

---

## ✅ 第三步：验证安装

### 1. 在 VSCode 中确认文件

打开 VSCode 的文件浏览器（左侧），检查：
```
public → fonts → PixelifySans-Regular.ttf
```
文件是否存在。

### 2. 重启开发服务器

在 VSCode 终端中（按 `` Ctrl + ` `` 打开）：

```bash
# 按 Ctrl+C 停止当前服务器

# 重新启动
npm run dev
```

### 3. 清除浏览器缓存

- 按 `Ctrl + Shift + Delete`（Windows）
- 或 `Cmd + Shift + Delete`（Mac）
- 勾选"缓存的图片和文件"
- 点击"清除数据"

### 4. 刷新页面

刷新浏览器（`F5` 或 `Ctrl+R`），像素字体应该正常显示了！

---

## 🎯 字体应用位置

使用 Pixelify Sans 字体的元素：

- ✅ 首页大标题 "Piexel Pleyer"
- ✅ PLAY 按钮文字
- ✅ Study 按钮文字
- ✅ Assessment 按钮文字
- ✅ 各个页面的标题

---

## 🔧 详细操作步骤（Windows）

### 使用文件资源管理器

1. **打开下载的字体 ZIP 文件位置**
   - 通常在 `C:\Users\你的用户名\Downloads\`

2. **解压 ZIP 文件**
   - 右键点击 ZIP 文件
   - 选择"解压全部..."
   - 点击"解压"

3. **找到字体文件**
   - 打开解压后的文件夹
   - 进入 `static` 文件夹
   - 找到 `PixelifySans-Regular.ttf`

4. **复制字体文件**
   - 右键点击 `PixelifySans-Regular.ttf`
   - 选择"复制"（或按 `Ctrl+C`）

5. **打开项目的 fonts 文件夹**
   - 在文件资源管理器中找到你的项目文件夹
   - 依次打开：`public` → `fonts`

6. **粘贴字体文件**
   - 在 `fonts` 文件夹中右键
   - 选择"粘贴"（或按 `Ctrl+V`）

7. **完成！**

---

## 🔧 详细操作步骤（Mac）

### 使用 Finder

1. **打开下载的字体 ZIP 文件**
   - 通常在"下载"文件夹
   - 双击 ZIP 文件自动解压

2. **找到字体文件**
   - 打开解压后的文件夹
   - 进入 `static` 文件夹
   - 找到 `PixelifySans-Regular.ttf`

3. **复制字体文件**
   - 选中 `PixelifySans-Regular.ttf`
   - 按 `Cmd+C` 复制

4. **打开项目的 fonts 文件夹**
   - 在 Finder 中找到你的项目文件夹
   - 依次打开：`public` → `fonts`

5. **粘贴字体文件**
   - 在 `fonts` 文件夹中
   - 按 `Cmd+V` 粘贴

6. **完成！**

---

## 🆘 常见问题

### Q: 字体文件放好了但还是看不到像素字体？

**解决方案**：
1. ✅ 检查文件名是否**完全一致**（包括大小写）
   - 必须是 `PixelifySans-Regular.ttf`
   - 不能是 `pixelifysans-regular.ttf` 或其他变体

2. ✅ 确认文件在正确位置
   - 路径：`/public/fonts/PixelifySans-Regular.ttf`

3. ✅ 重启开发服务器
   ```bash
   # 按 Ctrl+C 停止
   npm run dev  # 重新启动
   ```

4. ✅ 清除浏览器缓存并刷新

5. ✅ 检查浏览器控制台
   - 按 `F12` 打开开发者工具
   - 查看"Console"标签页
   - 看是否有字体加载错误

---

### Q: 找不到 .ttf 文件？

**解决方案**：
- 确保已经**解压** ZIP 文件
- 进入 `static` 文件夹（不是 `variable` 文件夹）
- 文件扩展名应该是 `.ttf`（TrueType Font）

---

### Q: VSCode 中找不到 public/fonts 文件夹？

**解决方案**：

已经创建好了！在 VSCode 左侧文件浏览器中：
```
展开 "public" 文件夹
  → 展开 "fonts" 文件夹
    → 这里放字体文件
```

如果没有，手动创建：
1. 右键点击 `public` 文件夹
2. 选择"新建文件夹"
3. 命名为 `fonts`

---

### Q: 可以使用其他像素字体吗？

**可以！** 推荐这些免费字体：

1. **Press Start 2P** - 经典8位游戏风格
   - 下载：https://fonts.google.com/specimen/Press+Start+2P

2. **VT323** - 复古终端风格
   - 下载：https://fonts.google.com/specimen/VT323

3. **DotGothic16** - 日系像素风格
   - 下载：https://fonts.google.com/specimen/DotGothic16

**使用其他字体需要修改代码**：
- 修改 `/styles/globals.css` 中的字体路径
- 修改各个组件中的 `font-family` 属性

---

## 💡 技术说明

### 本地字体 vs 在线字体

**本地字体**（当前方案）：
- ✅ 不需要网络连接
- ✅ 加载速度更快
- ✅ 完全离线可用
- ❌ 需要手动下载和放置文件

**在线字体**（Google Fonts CDN）：
- ✅ 自动加载，无需下载
- ✅ 自动优化
- ❌ 需要网络连接
- ❌ 需要访问 Google 服务

### CSS 配置

项目配置为**仅使用本地字体**：
- 字体文件从 `/public/fonts/` 文件夹加载
- 不依赖任何在线服务
- 完全离线可用
- 如果字体文件不存在，将显示系统默认字体

---

## 📞 需要帮助？

如果遇到问题：

1. 检查文件名和路径是否正确
2. 查看浏览器控制台（F12）的错误信息
3. 确保开发服务器已重启
4. 尝试清除浏览器缓存

---

**安装完成后，享受像素风格的网站吧！** 🎮✨