const assetPathPrefix = "/assets";
const imgImage14 = `${assetPathPrefix}/d9aa5.png`;
const imgImage2064 = `${assetPathPrefix}/51391.png`;
const imgVector = `${assetPathPrefix}/baa92.svg`;
const imgLine10 = `${assetPathPrefix}/616e2.svg`;
const imgLine11 = `${assetPathPrefix}/97f9f.svg`;
const imgComponent1 = `${assetPathPrefix}/77995.svg`;
const imgComponent2 = `${assetPathPrefix}/86310.svg`;
const imgComponent3 = `${assetPathPrefix}/1c5f7.svg`;
const imgComponent4 = `${assetPathPrefix}/ecc63.svg`;

const socials = [imgComponent1, imgComponent2, imgComponent3, imgComponent4];

function Rule({ src }) {
  return (
    <div className="h-0 relative w-full">
      <div className="absolute inset-[-0.5px_0_0_0]">
        <img alt="" className="block max-w-none size-full" src={src} />
      </div>
    </div>
  );
}

// At ≥1280px the spacing reproduces the Figma frame: logo at +52px, tagline at +123px, socials at +228px, divider at +408px.
export default function Footer() {
  return (
    <footer className="relative w-full" data-node-id="163:5488">
      <div className="-translate-x-1/2 absolute left-[calc(50%-0.5px)] size-[1947px] top-[191px] pointer-events-none" data-node-id="163:5489">
        <div className="absolute inset-[-20.54%]">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-[1360px] px-4 md:px-8 xl:px-10">
        <Rule src={imgLine10} />
        <div className="flex flex-col lg:flex-row lg:justify-between gap-[40px] pt-[40px] pb-[48px] xl:pt-[52px] xl:pb-0 xl:h-[408px]">
          <div className="flex flex-col gap-[32px] xl:gap-[50px]">
            <a href="#" className="flex gap-[16px] xl:gap-[24px] items-center">
              <div className="h-[72px] w-[57px] md:h-[100px] md:w-[79px] xl:h-[126px] xl:w-[99.78px] relative shrink-0">
                <img alt="BuildSpace logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage14} />
              </div>
              <p className="font-avenir font-black leading-[normal] text-[44px] md:text-[60px] xl:text-[72px] text-white whitespace-nowrap">BuildSpace</p>
            </a>
            <div className="flex flex-wrap gap-[16px] items-start" data-node-id="163:5499">
              {socials.map((src) => (
                <a key={src} href="#" className="bg-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0 size-[40px] hover:bg-[rgba(212,255,92,0.2)]">
                  <span className="relative shrink-0 size-[20px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={src} />
                  </span>
                </a>
              ))}
              <a href="#" className="bg-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0 size-[40px] hover:bg-[rgba(212,255,92,0.2)]">
                <span className="h-[14.648px] relative shrink-0 w-[20px]">
                  <span className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[136.53%] left-0 max-w-none top-[-17.87%] w-full" src={imgImage2064} />
                  </span>
                </span>
              </a>
            </div>
          </div>
          <p className="font-avenir font-light leading-[normal] text-[32px] md:text-[44px] xl:text-[52px] text-white uppercase w-full max-w-[515px] lg:self-start xl:mt-[71px]" data-node-id="163:5498">
            Every Great Developer Starts Building.
          </p>
        </div>
        <Rule src={imgLine11} />
        <div className="flex flex-wrap justify-center font-avenir font-normal gap-x-[52px] gap-y-2 leading-[normal] text-[#f4f4f5] text-[18px] md:text-[24px] text-center pt-[23px] pb-[40px]" data-node-id="163:5495">
          <a href="#" className="hover:text-[#d4ff5c]">Privacy Policy</a>
          <a href="#" className="hover:text-[#d4ff5c]">{`Terms & Condition`}</a>
        </div>
      </div>
    </footer>
  );
}
