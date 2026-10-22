const assetPathPrefix = "/assets";
const imgImage2098 = `${assetPathPrefix}/9fe11.png`;
const imgImageGrokVoiceThinkFast20 = `${assetPathPrefix}/2d00b.png`;
const imgImageBuildMode = `${assetPathPrefix}/5ec3a.png`;
const imgImageXAiAndGitHubCopilot = `${assetPathPrefix}/1d496.png`;
const imgImage2068 = `${assetPathPrefix}/d009a.png`;
const imgImage2071 = `${assetPathPrefix}/36425.png`;
const imgImage2065 = `${assetPathPrefix}/1cf15.png`;
const imgImage2072 = `${assetPathPrefix}/2eea7.png`;
const imgImage2073 = `${assetPathPrefix}/f2656.png`;
const imgImage2074 = `${assetPathPrefix}/b8c48.png`;
const imgImage2075 = `${assetPathPrefix}/18afc.png`;
const imgImage2076 = `${assetPathPrefix}/11717.png`;
const imgImage2077 = `${assetPathPrefix}/93260.png`;
const imgImage2088 = `${assetPathPrefix}/9e8b3.png`;
const imgImage2078 = `${assetPathPrefix}/9b0b2.png`;
const imgImage2079 = `${assetPathPrefix}/dda9b.png`;
const imgImage2080 = `${assetPathPrefix}/9a23f.png`;
const imgImage2081 = `${assetPathPrefix}/07841.png`;
const imgImage2082 = `${assetPathPrefix}/12439.png`;
const imgImage2084 = `${assetPathPrefix}/82a2c.png`;
const imgImage2085 = `${assetPathPrefix}/3d560.png`;
const imgImage2086 = `${assetPathPrefix}/5e28b.png`;
const imgImage2087 = `${assetPathPrefix}/40a7c.png`;
const imgImage2089 = `${assetPathPrefix}/cf05b.png`;
const imgArrowForward = `${assetPathPrefix}/1eed3.svg`;
const imgArrowForward1 = `${assetPathPrefix}/1062e.svg`;

const projects = [
  { title: "Introducing Grok Voice Think Fast 2.0", img: imgImageGrokVoiceThinkFast20 },
  { title: "Introducing Build Mode", img: imgImageBuildMode },
  { title: "Grok 4.5 in GitHub Copilot", img: imgImageXAiAndGitHubCopilot },
];

// box = icon slot size; crop = absolute img placement inside the slot (null → object-cover fill)
const techRow1 = [
  { img: imgImage2068, box: "h-[36.271px] w-[32px]", crop: "h-[131.06%] left-[-23.6%] top-[-15.87%] w-[148.55%]" },
  { img: imgImage2071, box: "size-[32px]" },
  { img: imgImage2065, box: "h-[31.761px] w-[32px]", crop: "h-[128.64%] left-[-14.21%] top-[-15.33%] w-[127.68%]" },
  { img: imgImage2072, box: "h-[47.265px] w-[33.998px]", crop: "h-[117.15%] left-0 top-0 w-full" },
  { img: imgImage2073, box: "h-[33.236px] w-[32px]", crop: "h-[101.33%] left-[-0.22%] top-[-0.69%] w-[100.72%]" },
  { img: imgImage2074, box: "size-[32px]" },
  { img: imgImage2075, box: "h-[52.387px] w-[32px]" },
  { img: imgImage2076, box: "h-[33.725px] w-[32px]", crop: "h-[142.05%] left-[-25.45%] top-0 w-[149.7%]" },
  { img: imgImage2077, box: "h-[31.421px] w-[32px]", crop: "h-[117.97%] left-[-7.01%] top-0 w-[115.84%]" },
  { img: imgImage2088, box: "size-[40px]" },
];
const techRow2 = [
  { img: imgImage2078, box: "size-[40px]" },
  { img: imgImage2079, box: "h-[35.349px] w-[32px]", crop: "h-[134.74%] left-[-24.71%] top-[-17.11%] w-[148.84%]" },
  { img: imgImage2080, box: "h-[44px] w-[46px]" },
  { img: imgImage2081, box: "h-[38.003px] w-[48.122px]", crop: "h-[126.63%] left-0 top-[-13.03%] w-full" },
  { img: imgImage2082, box: "h-[42.048px] w-[40px]" },
  { img: imgImage2084, box: "h-[45.539px] w-[42px]", crop: "h-[132.64%] left-[-10.67%] top-[-16.58%] w-[287.64%]" },
  { img: imgImage2085, box: "size-[42px]" },
  { img: imgImage2086, box: "h-[42.66px] w-[42px]", crop: "h-[187.81%] left-[-16.08%] top-[-16.47%] w-[133.09%]" },
  { img: imgImage2087, box: "size-[40px]" },
  { img: imgImage2089, box: "h-[39px] w-[32px]" },
];

function TechIcon({ img, box, crop }) {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0 size-[64px] sm:size-[70px] transition-colors hover:bg-[rgba(212,255,92,0.15)]">
      <div className={`relative shrink-0 ${box}`}>
        {crop ? (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className={`absolute max-w-none ${crop}`} src={img} />
          </div>
        ) : (
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
        )}
      </div>
    </div>
  );
}

function CardTitle({ children, className }) {
  return (
    <div className="h-[53px] w-full pt-[12px]">
      <div className="h-[24px] pt-[4px]">
        <p className={`leading-[19.25px] text-[rgba(255,255,255,0.8)] tracking-[-0.35px] truncate ${className}`}>{children}</p>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="flex flex-col gap-[56px] xl:gap-[60px] items-center relative w-full" data-node-id="163:4848">
      <div className="flex flex-col gap-[40px] md:gap-[64px] xl:gap-[87px] items-center w-full max-w-[1235px]" data-node-id="163:4849">
        <div className="flex flex-col gap-[14px] items-center text-center w-full max-w-[668px]" data-node-id="163:4850">
          <h2 className="font-avenir font-extrabold leading-[normal] text-[#f4f4f5] text-[36px] sm:text-[48px] lg:text-[64px] uppercase w-full">
            {`Featured `}<span className="text-[#d4ff5c]">Projects</span>
          </h2>
          <p className="font-avenir font-light leading-[normal] text-[17px] md:text-[20px] lg:text-[24px] text-white w-full">
            Learn by building projects that strengthen your portfolio.
          </p>
        </div>
        <div className="flex flex-col gap-[28px] items-end justify-center w-full" data-node-id="163:4853">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] w-full" data-node-id="163:4854">
            <a href="#" className="flex flex-col items-start group" data-node-id="163:4855">
              <div className="bg-white aspect-[293/154.77] relative w-full overflow-clip">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[100.15%] left-[calc(50%+1.71%)] top-[calc(50%+0.11px)] w-[104.78%]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[138.94%] left-[-3.15%] max-w-none top-[-23.2%] w-[105.28%]" src={imgImage2098} />
                  </div>
                </div>
              </div>
              <CardTitle className="font-avenir font-medium text-[12px]">{`Linux Security Audit & Monitoring Suite (LSAMS)`}</CardTitle>
            </a>
            {projects.map(({ title, img }) => (
              <a key={title} href="#" className="flex flex-col items-start">
                <div className="bg-[#1a1a1a] border border-[rgba(255,255,255,0.06)] border-solid aspect-[293/154.773] w-full overflow-clip p-px">
                  <div className="size-full relative overflow-clip">
                    <img alt={title} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
                  </div>
                </div>
                <CardTitle className="font-avenir font-medium text-[14px]">{title}</CardTitle>
              </a>
            ))}
          </div>
          <div className="flex gap-[12px] items-center" data-node-id="163:4882">
            <button type="button" aria-label="Previous" className="bg-[rgba(255,255,255,0.1)] flex items-center justify-center size-[40px] hover:bg-[rgba(255,255,255,0.2)]">
              <div className="-scale-y-100 rotate-180 relative size-[18px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForward} />
              </div>
            </button>
            <button type="button" aria-label="Next" className="bg-[rgba(255,255,255,0.1)] flex items-center justify-center size-[40px] hover:bg-[rgba(255,255,255,0.2)]">
              <div className="relative size-[18px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForward1} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[42px] items-center w-full" data-node-id="163:4891">
        <p className="font-avenir font-light leading-[normal] text-[20px] lg:text-[24px] text-center text-white w-full">
          <span className="text-[#d4ff5c]">Tech Stack</span>{` You'll Master`}
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-10 gap-x-[16px] sm:gap-x-[28px] xl:gap-x-[52px] gap-y-[16px] sm:gap-y-[28px] xl:gap-y-[40px]" data-node-id="163:4893">
          {[...techRow1, ...techRow2].map((icon) => <TechIcon key={icon.img} {...icon} />)}
        </div>
      </div>
    </section>
  );
}
