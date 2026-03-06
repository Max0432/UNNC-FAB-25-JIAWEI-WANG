请将 ef4-main 项目的页面文件放在此文件夹内。

例如：
- index.html（入口页）
- 以及该页面所需的 js、css、图片等资源（保持相对路径不变）

首页顶部会通过 iframe 加载 /ef4-main/index.html 来显示该内容。

若 ef4-main 是独立项目，请先在其目录内执行构建（如 npm run build），
再将构建产物（如 dist 里的 index.html 和 assets 等）复制到本文件夹。
