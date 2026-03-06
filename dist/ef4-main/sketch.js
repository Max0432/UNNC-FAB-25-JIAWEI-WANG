// --- 全局变量 ---
let sourceImg;          // 存储加载的图像 (p5.Image 对象)
let sourceSong;         // 存储加载的音乐
let cnv;                // p5 canvas element (so we can parent it inside a wrapper)
let fft;                // FFT (快速傅里叶变换) 分析器
// 固定参数：兼顾律动明显与页面流畅，采用规则变化
const dotSize = 8;           // 像素密度（固定，平衡细节与性能）
const bassMultiplier = 1.6;   // 低音→粒子反应的规则系数
const CHAOS_STRENGTH = 2.2;   // 粒子波动强度（固定，规则化）

// 粒子系统
let particles = []; // { x0,y0,x,y,vx,vy,r,g,b,alpha,baseSize,seed }
let smoothedBass = 0;        // 平滑后的低音值，用于规则化律动
const MOUSE_RADIUS = 120;
const MOUSE_FORCE = 3.0;
// 性能：最大粒子数上限；大画布时自动降低以减轻卡顿
const MAX_PARTICLES_DEFAULT = 500;
const MAX_PARTICLES_LOW = 360;       // 画布面积大时使用
const CANVAS_AREA_PERF_THRESHOLD = 900000;  // 超过此面积启用降质
const MAX_CANVAS_WIDTH = 1600;       // 内部分辨率上限
const MAX_CANVAS_HEIGHT = 960;
const RECT_CORNER_RADIUS = 2;

// *** 请确保这些路径和 assets 文件夹中的文件完全匹配 ***
const IMAGE_PATH = 'assets/cyberpunk_image.jpg'; 
const MUSIC_PATH = 'assets/y2k_track.mp3'; 

// --- 预加载函数 (确保在 setup 之前加载资源) ---
function preload() {
    console.log("Preloading image and sound...");
    
    sourceImg = loadImage(IMAGE_PATH, 
        () => console.log(`Image '${IMAGE_PATH}' loaded OK.`),
        (e) => console.error(`[ERROR] Failed to load image '${IMAGE_PATH}'. Check path/name.`, e)
    );
    
    sourceSong = loadSound(MUSIC_PATH, 
        () => console.log(`Sound '${MUSIC_PATH}' loaded OK.`),
        (e) => console.error(`[ERROR] Failed to load sound '${MUSIC_PATH}'. Check path/name.`, e)
    );
}

// --- 设置函数 ---
function setup() {
    let cw = Math.max(1, Math.floor(windowWidth * 0.75));
    let ch = Math.max(1, Math.floor(windowHeight * 0.82));
    if (cw > MAX_CANVAS_WIDTH || ch > MAX_CANVAS_HEIGHT) {
        const r = Math.min(MAX_CANVAS_WIDTH / cw, MAX_CANVAS_HEIGHT / ch);
        cw = Math.max(1, Math.floor(cw * r));
        ch = Math.max(1, Math.floor(ch * r));
    }
    cnv = createCanvas(cw, ch);
    cnv.parent('canvas-wrapper');
    pixelDensity(1);  // 高 DPI 屏不放大像素，减少绘制量
    // 若内部分辨率被缩小，用 CSS 拉伸到原显示尺寸
    if (cw < windowWidth * 0.75 || ch < windowHeight * 0.82) {
        cnv.elt.style.width = (windowWidth * 0.75) + 'px';
        cnv.elt.style.height = (windowHeight * 0.82) + 'px';
    }
    fft = new p5.FFT();
    colorMode(RGB, 255);
    rectMode(CENTER);

    // 鼠标交互（p5 提供全局 mouseX / mouseY）
    // 将鼠标事件绑定到实际的 canvas 元素（如果需要）
    if (cnv && cnv.elt) {
        cnv.elt.addEventListener('mousemove', () => {});
    }

    // 构建粒子（必须在 image 已加载后调用）
    if (sourceImg && sourceImg.width > 0) {
        buildParticles();
    }

    // 不自动播放，避免与用户点击播放按钮后重叠；仅通过 PLAY 按钮播放
    // if (sourceSong && sourceSong.isLoaded()) { sourceSong.loop(); }

    // Play button
    const playBtn = document.getElementById('play-toggle');
    if (playBtn) {
        playBtn.onclick = function() {
            togglePlayback();
            updatePlayButtonIcon();
        };
        updatePlayButtonIcon();
    }
}

// --- 主绘图循环 ---
function draw() {
    background(0);

    if (!sourceImg || sourceImg.width === 0) {
        if (width > 0 && height > 0) {
            fill(255, 255, 255);
            textAlign(CENTER, CENTER);
            textSize(12);
            text("资源加载失败", width / 2, height / 2 - 20);
            textSize(10);
            text("请用本地服务器打开：在项目目录运行 npx serve", width / 2, height / 2 + 10);
            text("再访问 http://localhost:3000", width / 2, height / 2 + 28);
        }
        return;
    }

    // 音频分析 + 规则化平滑（明显律动且流畅）
    let bass = 0;
    if (sourceSong && sourceSong.isLoaded() && sourceSong.isPlaying()) {
        fft.analyze();
        bass = fft.getEnergy('bass');
    }
    smoothedBass = lerp(smoothedBass, bass, 0.12);  // 规则：平滑跟随低音，避免抖动
    const audioForce = map(smoothedBass * bassMultiplier, 0, 255 * bassMultiplier, 0, 2.2);

    const useShadow = width * height <= CANVAS_AREA_PERF_THRESHOLD;
    const ctx = typeof drawingContext !== 'undefined' ? drawingContext : null;
    if (ctx && !useShadow) ctx.shadowBlur = 0;

    noStroke();
    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const t = frameCount * 0.01;
        const nx = (noise(p.seed + t) - 0.5) * CHAOS_STRENGTH * 0.45;
        const ny = (noise(p.seed + 100 + t) - 0.5) * CHAOS_STRENGTH * 0.45;

        const k = 0.08 * (1 + audioForce * 1.0);
        let fx = (p.x0 - p.x) * k + nx;
        let fy = (p.y0 - p.y) * k + ny;

        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const d = sqrt(dx * dx + dy * dy) + 0.0001;
        if (d < MOUSE_RADIUS) {
            const push = (1 - d / MOUSE_RADIUS) * MOUSE_FORCE * (1 + audioForce);
            fx += (dx / d) * push;
            fy += (dy / d) * push;
        }

        p.vx = (p.vx + fx) * 0.88;
        p.vy = (p.vy + fy) * 0.88;
        p.x += p.vx;
        p.y += p.vy;

        const sz = p.baseSize * (0.5 + 2.8 * audioForce);

        fill(p.r, p.g, p.b, p.alpha * 255);
        if (ctx && useShadow) {
            ctx.shadowBlur = max(0.2, sz * 0.35);
            ctx.shadowColor = `rgba(${p.r},${p.g},${p.b},${p.alpha * 0.6})`;
        }
        rect(p.x, p.y, sz, sz, useShadow ? RECT_CORNER_RADIUS : 0);
        if (ctx && useShadow) ctx.shadowBlur = 0;
    }
}

// --- 音乐控制函数 ---
function togglePlayback() {
    if (sourceSong && sourceSong.isLoaded()) {
        if (sourceSong.isPlaying()) {
            sourceSong.pause();
        } else {
            sourceSong.loop(); 
        }
        // reflect play state on button
        updatePlayButtonIcon();
    }
}

function updatePlayButtonIcon() {
    const btn = document.getElementById('play-toggle');
    if (!btn) return;
    if (sourceSong && sourceSong.isLoaded() && sourceSong.isPlaying()) {
        btn.textContent = 'PAUSE';
        btn.classList.add('playing');
    } else {
        btn.textContent = 'PLAY / PAUSE';
        btn.classList.remove('playing');
    }
}

// --- 窗口大小改变时重设 Canvas ---
function windowResized() {
    let cw = windowWidth * 0.75;
    let ch = windowHeight * 0.82;
    if (cw > MAX_CANVAS_WIDTH || ch > MAX_CANVAS_HEIGHT) {
        const r = Math.min(MAX_CANVAS_WIDTH / cw, MAX_CANVAS_HEIGHT / ch);
        cw = Math.floor(cw * r);
        ch = Math.floor(ch * r);
    }
    resizeCanvas(cw, ch);
    if (cw < windowWidth * 0.75 || ch < windowHeight * 0.82) {
        cnv.elt.style.width = (windowWidth * 0.75) + 'px';
        cnv.elt.style.height = (windowHeight * 0.82) + 'px';
    } else {
        cnv.elt.style.width = '';
        cnv.elt.style.height = '';
    }
    buildParticles();
}

/**
 * 构建粒子数组：每个采样点成为一个可移动粒子
 */
function buildParticles() {
    particles = [];
    if (!sourceImg || sourceImg.width === 0) return;

    sourceImg.loadPixels();

    // 计算缩放比例，使图像居中填充 Canvas
    let imgRatio = sourceImg.width / sourceImg.height;
    let canvasRatio = width / height;
    let w, h;

    if (imgRatio > canvasRatio) {
        h = height;
        w = h * imgRatio;
    } else {
        w = width;
        h = w / imgRatio;
    }
    let startX = (width - w) / 2;
    let startY = (height - h) / 2;

    const area = width * height;
    const maxP = area > CANVAS_AREA_PERF_THRESHOLD ? MAX_PARTICLES_LOW : MAX_PARTICLES_DEFAULT;
    const approxCols = Math.max(1, Math.floor(w / dotSize));
    const approxRows = Math.max(1, Math.floor(h / dotSize));
    const approxTotal = approxCols * approxRows;
    let step = dotSize;
    if (approxTotal > maxP) {
        const scale = Math.sqrt(approxTotal / maxP);
        step = Math.ceil(dotSize * scale);
    }

    for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
            let originalX = floor(x * sourceImg.width / w);
            let originalY = floor(y * sourceImg.height / h);
            const index = (originalX + originalY * sourceImg.width) * 4;
            const r = sourceImg.pixels[index];
            const g = sourceImg.pixels[index + 1];
            const b = sourceImg.pixels[index + 2];

            // 色彩映射（Y2K 风格）
            let colorR = constrain(r, 0, 255);
            let colorG = constrain(g * 0.6, 0, 180);
            let colorB = constrain(b, 0, 255);

            const px = startX + x;
            const py = startY + y;

            particles.push({
                x0: px,
                y0: py,
                x: px + random(-5, 5),
                y: py + random(-5, 5),
                vx: random(-0.5, 0.5),
                vy: random(-0.5, 0.5),
                r: colorR,
                g: colorG,
                b: colorB,
                alpha: constrain((r + g + b) / (3 * 255), 0.3, 1.0),
                baseSize: dotSize * 0.7,
                seed: random(1000)
            });
        }
    }
}