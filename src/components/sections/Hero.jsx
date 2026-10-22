const assetPathPrefix = "/assets";
const imgIcon = `${assetPathPrefix}/2e717.svg`;
const imgIcon1 = `${assetPathPrefix}/57989.svg`;

const downloads = [
  { label: "Download for Mac", icon: imgIcon },
  { label: "Download for Windows", icon: imgIcon1 },
];

export default function Hero() {
  return (
    <section className="flex flex-col gap-[40px] md:gap-[58px] items-center relative w-full max-w-[1011px]" data-node-id="163:4549">
      <div className="flex flex-col gap-[24px] items-center text-center text-white w-full" data-node-id="163:4550">
        <h1 className="w-full max-w-[960px] xl:h-[192px] font-avenir font-black text-[40px] sm:text-[56px] md:text-[64px] lg:text-[80px] leading-[1.15] lg:leading-[normal]" data-node-id="163:4551">
          <span className="block">The AI-Powered Platform</span>
          <span className="block">
            {`to `}
            <span className="text-[#d4ff5c] uppercase">learn</span>
            {`, `}
            <span className="text-[#d4ff5c] uppercase">{`build `}</span>
            <span className="uppercase">{`&`}</span>
            <span className="text-[#d4ff5c] uppercase">{` ship`}</span>
          </span>
        </h1>
        <p className="font-avenir font-light leading-[normal] text-[17px] md:text-[20px] lg:text-[24px] w-full max-w-[825px]" data-node-id="163:4552">
          Hands-on projects. AI code review. Real engineering practice. Go from learning to shipping production-ready software.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-[20px] items-stretch sm:items-start w-full sm:w-auto max-w-[320px] sm:max-w-none" data-node-id="163:4553">
        {downloads.map(({ label, icon }) => (
          <a key={label} href="#" className="bg-white min-h-[45.257px] rounded-[2px] self-stretch flex gap-[10.057px] items-center justify-center px-[15.086px] py-[10.057px] hover:bg-[#d4ff5c] transition-colors">
            <span className="relative shrink-0 size-[20.114px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={icon} />
            </span>
            <span className="font-inter font-medium leading-[20.114px] text-[#2f3031] text-[17.6px] tracking-[0.2514px] whitespace-nowrap">{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
