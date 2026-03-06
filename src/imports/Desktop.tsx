import imgHands2 from "figma:asset/e05ee4db6031084fa8a2fea8c339376d3fbfccfc.png";
import imgCrown1 from "figma:asset/15a003d1606d0600638e5a8c3527f805635ba204.png";

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-end leading-[0] relative shrink-0 text-center w-full" data-name="Text">
      <div className="flex flex-col font-['Pixelify_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#ededed] text-[64px] tracking-[-1.28px] w-[740px]">
        <h1 className="block leading-[1.1]">Piexel Pleyer</h1>
      </div>
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium justify-center min-w-full not-italic relative shrink-0 text-[24px] text-[rgba(136,136,136,0.55)] tracking-[-0.12px] w-[min-content]">
        <p className="leading-[1.4]">Tips：Tap to show/hide interaction controls.</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute cursor-pointer h-[128px] left-0 top-[325.06px] w-[320px]">
      <div className="absolute bg-[#d9bbbb] bottom-0 h-[128px] left-0 w-[320px]" />
      <div className="absolute flex flex-col font-['Pixelify_Sans:Regular',sans-serif] font-normal h-[128px] justify-center leading-[0] left-[160px] text-[#2d0303] text-[64px] text-center top-[64px] translate-x-[-50%] translate-y-[-50%] w-[320px]">
        <p className="leading-[normal]">PLAY</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[128px] left-[320px] top-[325.06px] w-[320px]">
      <div className="absolute bg-[#a373b7] bottom-0 h-[128px] left-0 w-[320px]" />
      <div className="absolute bottom-0 flex flex-col font-['Pixelify_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[160px] text-[#2d0303] text-[64px] text-center top-0 translate-x-[-50%] w-[320px]">
        <p className="leading-[normal]">Study</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[128px] left-[640px] top-[325.06px] w-[638px]">
      <div className="absolute bg-[#924a83] bottom-0 h-[128px] left-0 w-[640px]" />
      <div className="absolute flex flex-col font-['Pixelify_Sans:Regular',sans-serif] font-normal h-[128px] justify-center leading-[0] right-[321px] text-[#2d0303] text-[64px] text-center top-[64px] translate-x-[50%] translate-y-[-50%] w-[638px]">
        <p className="leading-[normal]">Assessment</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[454px] relative shrink-0 w-[1280px]">
      <div className="absolute bg-[#282121] h-[325px] right-0 top-[0.06px] w-[1280px]" />
      <div className="absolute font-['Micro_5:Regular',sans-serif] leading-[normal] not-italic right-[1170px] text-[#7e0909] text-[128px] text-nowrap top-[35.06px] translate-x-[100%]">
        <p className="mb-0">#FABLAB/25</p>
        <p>DOMINO HOUSE</p>
      </div>
      <Frame />
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[314px] relative shrink-0 w-full">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[314px] justify-center leading-[0] left-1/2 not-italic text-[0px] text-[rgba(136,136,136,0.55)] text-center top-[157px] tracking-[-0.12px] translate-x-[-50%] translate-y-[-50%] w-[1152px]">
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.4] mb-0 text-[64px] text-[rgba(255,255,255,0.55)]">Legacy.</p>
        <p className="leading-[1.4] text-[24px] text-[rgba(255,255,255,0.55)]">
          <span>
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Medium',sans-serif] font-medium not-italic">Consciousness stripped from flesh, she plummets into the boundless abyss of the cyber dimension. Following the fabled lingering energy signals, she weaves through fragmented virtual landscapes. Those digitized mountains and rivers, those encoded traces of life—they are Earth’s final love letter to the cosmos. She does not merely seek; rather, in the cyber realm, she rebuilds an undying memory for her lost home.</span>
        </p>
      </div>
    </div>
  );
}

function Column() {
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

function Frame5() {
  return (
    <div className="content-stretch flex h-[607px] items-center justify-center relative shrink-0 w-[474px]">
      <div className="h-[603px] relative rounded-[40px] shrink-0 w-[452px]" data-name="face2 1">
        <video autoPlay className="absolute max-w-none object-cover rounded-[40px] size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/f585099c4a383ef31922bbaa00d2f491e870b555" />
        </video>
        <div aria-hidden="true" className="absolute border border-[#5d1c1c] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex h-[607px] items-center justify-center relative shrink-0 w-[638px]">
      <Frame5 />
    </div>
  );
}

function Grid() {
  return (
    <div className="content-stretch flex gap-[32px] h-[607px] items-start justify-center relative shrink-0 w-full" data-name="Grid">
      <Column />
      <Frame4 />
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-black relative shrink-0 w-full" data-name="Hero  1">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[95px] items-center pb-0 pt-[64px] px-[64px] relative w-full">
          <Text />
          <Frame3 />
          <Frame6 />
          <Grid />
        </div>
      </div>
    </section>
  );
}

export default function Desktop() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[190px] items-center relative size-full" data-name="Desktop">
      <Hero />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(136,136,136,0.55)] text-center tracking-[-0.12px] w-[1280px]">
        <p className="leading-[1.4]">Contact Email: Hozierdrew@gmail.com</p>
      </div>
    </div>
  );
}