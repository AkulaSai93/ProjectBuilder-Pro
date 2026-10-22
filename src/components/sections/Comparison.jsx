const assetPathPrefix = "/assets";
const imgImage2058 = `${assetPathPrefix}/30d4a.png`;
const imgImage2060 = `${assetPathPrefix}/046d9.png`;
const imgImage14 = `${assetPathPrefix}/d9aa5.png`;
const imgImage2061 = `${assetPathPrefix}/a30df.png`;
const imgImage2063 = `${assetPathPrefix}/0abc4.png`;
const imgClose = `${assetPathPrefix}/7ffa6.svg`;
const imgCheck = `${assetPathPrefix}/a6e6d.svg`;
const imgCheck1 = `${assetPathPrefix}/1df48.svg`;

const features = [
  "Attempt First, Unlock Resource Later",
  "Project - First Learning",
  "AI Mentor with Smart Hints",
  "1:1 Industry Mentor Assistance",
  "Integrated Coding Workspace",
  "Automated Test Case Validation",
  "XP, Level & Achievement System",
  "Progress Unlocks Through Validation",
  "Portfolio - Ready Deliverable",
];

const cell = "bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] border-b border-l border-solid flex h-[70px] items-center justify-center px-[20px] py-[16px] w-full";
const headCell = "bg-white border-[rgba(255,255,255,0.2)] border-b border-l border-t border-solid flex h-[70px] items-center justify-center px-[20px] py-[16px] w-full";

function Close() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[21.333px] top-1/2">
        <img alt="No" className="absolute block inset-0 max-w-none size-full" src={imgClose} />
      </div>
    </div>
  );
}

function Check({ src }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]">
      <div className="absolute left-[6.66px] size-[26.667px] top-[6.66px]">
        <img alt="Yes" className="absolute block inset-0 max-w-none size-full" src={src} />
      </div>
    </div>
  );
}

function LogoBox({ src, box, crop }) {
  return (
    <div className="bg-white h-[38px] overflow-clip relative shrink-0 w-[96px]">
      <div className={`-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.5px)] top-[calc(50%+0.13px)] ${box}`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className={`absolute max-w-none ${crop}`} src={src} />
        </div>
      </div>
    </div>
  );
}

// `yes` lists feature indexes that get a check mark
const competitorsLeft = [
  { head: <LogoBox src={imgImage2058} box="h-[30.25px] w-[75px]" crop="h-[247.93%] left-0 top-[-73.55%] w-full" />, yes: [] },
  { head: <LogoBox src={imgImage2060} box="h-[15.767px] w-[82.5px]" crop="h-[290.7%] left-0 top-[-94.19%] w-full" />, yes: [] },
];
const competitorsRight = [
  { head: <LogoBox src={imgImage2061} box="h-[18.993px] w-[85.004px]" crop="inset-0 object-cover size-full" />, yes: [] },
  {
    head: (
      <div className="flex gap-[6px] items-center">
        <div className="relative shrink-0 size-[28.6px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[-10.8%] max-w-none size-[121.46%] top-[-9.31%]" src={imgImage2063} />
          </div>
        </div>
        <p className="font-avenir font-extrabold leading-[normal] text-[16px] text-black whitespace-nowrap">ProjectPro</p>
      </div>
    ),
    yes: [1, 8],
    width: "w-[136px]",
  },
];

function Column({ head, yes, width }) {
  return (
    <div className={`flex flex-col items-start shrink-0 ${width ?? ""}`}>
      <div className={headCell}>{head}</div>
      {features.map((f, i) => (
        <div key={f} className={cell}>{yes.includes(i) ? <Check src={imgCheck1} /> : <Close />}</div>
      ))}
    </div>
  );
}

export default function Comparison() {
  return (
    <section id="features" className="flex flex-col gap-[40px] xl:gap-[52px] items-center relative w-full" data-node-id="163:5190">
      <div className="flex flex-col gap-[14px] items-center text-center">
        <h2 className="font-avenir font-extrabold leading-[normal] text-[36px] sm:text-[48px] lg:text-[64px] text-white uppercase w-full">
          {`Why `}<span className="text-[#d4ff5c]">BuildSpace</span>{` Stands Out`}
        </h2>
        <p className="font-avenir font-light leading-[normal] text-[#f4f4f5] text-[17px] md:text-[20px] lg:text-[24px] w-full">Beyond courses. Built for real developers</p>
      </div>
      <div className="w-full max-xl:overflow-x-auto max-xl:py-[28px] max-xl:-my-[28px] no-scrollbar">
      <div className="flex items-center w-max xl:w-full" data-node-id="163:5194">
        <div className="flex flex-col items-start shrink-0 max-xl:sticky max-xl:left-0 max-xl:z-10 max-xl:bg-[#0c0c0c] max-xl:shadow-[8px_0_16px_rgba(0,0,0,0.6)]">
          <div className="bg-white border border-[rgba(255,255,255,0.2)] border-solid flex h-[70px] items-center px-[20px] py-[16px] w-full">
            <p className="font-avenir font-extrabold leading-[normal] text-[18px] sm:text-[20px] xl:text-[24px] text-black whitespace-nowrap">Featured</p>
          </div>
          {features.map((f) => (
            <div key={f} className="bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] border-b border-l border-r border-solid flex h-[70px] items-center px-[14px] sm:px-[20px] py-[16px] w-full">
              <p className="font-avenir font-normal leading-[normal] text-[14px] sm:text-[20px] xl:text-[24px] text-[rgba(255,255,255,0.9)] max-sm:w-[150px] sm:whitespace-nowrap">{f}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-[8px] items-center shrink-0">
          <div className="flex items-center">
            {competitorsLeft.map((c, i) => <Column key={i} {...c} />)}
          </div>
          <div className="drop-shadow-[0px_0px_20px_#d4ff5c] flex flex-col items-start shrink-0 w-[144px]" data-node-id="163:5316">
            <div className="bg-[#d4ff5c] border-[1.059px] border-[rgba(0,0,0,0.2)] border-solid flex h-[74.118px] items-center justify-center px-[21.176px] py-[16.941px] w-full">
              <div className="flex gap-[5.768px] items-center">
                <div className="h-[30.282px] relative shrink-0 w-[23.981px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage14} />
                </div>
                <p className="font-avenir font-black leading-[normal] text-[#0e0f0c] text-[17.304px] whitespace-nowrap">BuildSpace</p>
              </div>
            </div>
            {features.map((f) => (
              <div key={f} className="bg-[#d4ff5c] border-[rgba(0,0,0,0.2)] border-b-[1.059px] border-l-[1.059px] border-r-[1.059px] border-solid flex h-[74.118px] items-center justify-center px-[21.176px] py-[16.941px] w-[144px]">
                <Check src={imgCheck} />
              </div>
            ))}
          </div>
          <div className="flex items-center">
            {competitorsRight.map((c, i) => <Column key={i} {...c} />)}
          </div>
        </div>
      </div>
      </div>
      <p className="xl:hidden -mt-[24px] font-avenir font-normal text-[14px] text-white/50">Swipe to compare →</p>
    </section>
  );
}
