import { Link } from 'react-router-dom';
import imgHands2 from "figma:asset/e05ee4db6031084fa8a2fea8c339376d3fbfccfc.png";
import imgCrown1 from "figma:asset/15a003d1606d0600638e5a8c3527f805635ba204.png";
import imgCharacter from "figma:asset/c7083cd2e1f43e635a3437eb26289900435255a8.png";

/* 首页首屏：ef4 交互视觉（本地 /ef4-main/index.html） */
function InteractiveAnimation() {
  return (
    <section className="w-full min-h-screen relative shrink-0" aria-label="ef4 交互视觉">
      <iframe
        src={`${import.meta.env.BASE_URL}ef4-main/index.html`}
        className="absolute inset-0 w-full h-full border-0"
        title="ef4 交互视觉 - 粒子与音乐"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="eager"
      />
    </section>
  );
}

/* 标题区：深红色、像素字体、左对齐、轻微闪烁 */
const titleStyle = {
  fontFamily: "'Pixelify Sans', sans-serif",
  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
  fontWeight: 400,
  letterSpacing: '0.02em',
  lineHeight: 1.2,
  color: '#7E0909',
  textShadow: '0 0 20px rgba(126, 9, 9, 0.4)',
};

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-end relative shrink-0 w-full max-w-[1152px] px-4" data-name="Text">
      <h1 className="home-title-blink" style={titleStyle}>
        UNNC FABLAB
      </h1>
      <p className="home-title-blink" style={titleStyle}>
        2025-2  / Jiawei Wang
      </p>
    </div>
  );
}

const btnTextColor = '#1a1214'; /* 加深文字颜色，更醒目 */
const btnStyles = {
  play: { backgroundColor: '#D6C5C0' },
  project: { backgroundColor: '#8F70A6' },
  assessment: { backgroundColor: '#6B4F7F' },
};

function ButtonSection() {
  return (
    <div
      className="w-full max-w-[1152px] flex h-[128px] home-btn-border-blink"
      style={{ border: '4px solid #7E0909' }}
    >
      <Link
        to="/play"
        className="home-btn flex-1 flex items-center justify-center cursor-pointer h-full"
        style={{ ...btnStyles.play, borderRight: '4px solid #7E0909' }}
      >
        <span className="home-btn-text font-['Pixelify_Sans:Regular',sans-serif] text-[48px] leading-none" style={{ color: btnTextColor }}>PLAY</span>
      </Link>
      <Link
        to="/study"
        className="home-btn flex-1 flex items-center justify-center cursor-pointer h-full"
        style={{ ...btnStyles.project, borderRight: '4px solid #7E0909' }}
      >
        <span className="home-btn-text font-['Pixelify_Sans:Regular',sans-serif] text-[48px] leading-none" style={{ color: btnTextColor }}>PROJECT</span>
      </Link>
      <Link
        to="/assessment"
        className="home-btn flex-1 flex items-center justify-center cursor-pointer h-full"
        style={btnStyles.assessment}
      >
        <span className="home-btn-text font-['Pixelify_Sans:Regular',sans-serif] text-[48px] leading-none" style={{ color: btnTextColor }}>ASSESSMENT</span>
      </Link>
    </div>
  );
}

function LegacySection() {
  return (
    <div className="h-[314px] relative shrink-0 w-full">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[314px] justify-center leading-[0] left-1/2 not-italic text-[0px] text-[rgba(136,136,136,0.55)] text-center top-[157px] tracking-[-0.12px] translate-x-[-50%] translate-y-[-50%] w-[1152px]">
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.4] mb-0 text-[64px] text-[rgba(255,255,255,0.55)]">Legacy.</p>
        <p className="leading-[1.4] text-[24px] text-[rgba(255,255,255,0.55)]">
          <span>
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Medium',sans-serif] font-medium not-italic">Consciousness stripped from flesh, she plummets into the boundless abyss of the cyber dimension. Following the fabled lingering energy signals, she weaves through fragmented virtual landscapes. Those digitized mountains and rivers, those encoded traces of life—they are Earth's final love letter to the cosmos. She does not merely seek; rather, in the cyber realm, she rebuilds an undying memory for her lost home.</span>
        </p>
      </div>
    </div>
  );
}

function ImageColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] h-[607px] items-center justify-center relative shrink-0 w-[482px]" data-name="Column">
      <div className="aspect-[520/300] pointer-events-none relative rounded-[40px] shrink-0 w-full" data-name="hands 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[40px] size-full" src={imgHands2} />
        <div aria-hidden="true" className="absolute border border-[#5d1c1c] border-solid inset-0 rounded-[40px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <div className="aspect-[520/300] pointer-events-none relative rounded-[40px] shrink-0 w-full" data-name="crown 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[40px] size-full" src={imgCrown1} />
        <div aria-hidden="true" className="absolute border border-[#5d1c1c] border-solid inset-0 rounded-[40px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      </div>
    </div>
  );
}

function VideoSection() {
  return (
    <div className="content-stretch flex h-[607px] items-center justify-center relative shrink-0 w-[474px]">
      <div className="h-[603px] relative rounded-[40px] shrink-0 w-[452px]" data-name="character image">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[40px] size-full" src={imgCharacter} />
        <div aria-hidden="true" className="absolute border border-[#5d1c1c] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      </div>
    </div>
  );
}

function MediaGrid() {
  return (
    <div className="content-stretch flex gap-[32px] h-[607px] items-start justify-center relative shrink-0 w-full" data-name="Grid">
      <ImageColumn />
      <div className="content-stretch flex h-[607px] items-center justify-center relative shrink-0 w-[638px]">
        <VideoSection />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-black relative shrink-0 w-full" data-name="Hero  1">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[95px] items-center pb-0 pt-[64px] px-[64px] relative w-full">
          <Text />
          <ButtonSection />
          <LegacySection />
          <MediaGrid />
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center relative min-h-screen w-full" data-name="Desktop">
      <InteractiveAnimation />
      <div className="flex flex-col gap-[190px] items-center w-full">
        <Hero />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(136,136,136,0.55)] text-center tracking-[-0.12px] w-[1280px]">
          <p className="leading-[1.4]">Contact Email: Hozierdrew@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
