const assetPathPrefix = "/assets";
const imgImage2390 = `${assetPathPrefix}/5f40a.png`;
const imgImage2052 = `${assetPathPrefix}/3186b.png`;
const imgImage2053 = `${assetPathPrefix}/3a005.png`;
const imgImage2054 = `${assetPathPrefix}/567d3.png`;
const imgImage2055 = `${assetPathPrefix}/92bb3.png`;
const imgImage2056 = `${assetPathPrefix}/98dd5.png`;
const imgImage2067 = `${assetPathPrefix}/940e2.png`;
const imgImage2066 = `${assetPathPrefix}/71e85.png`;
const imgEllipse6 = `${assetPathPrefix}/ce416.svg`;

function Logo({ img, w, crop }) {
  return (
    <div className="h-[25px] relative shrink-0" style={{ width: w }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className={`absolute max-w-none ${crop}`} src={img} />
      </div>
    </div>
  );
}

const linkedIn = { img: imgImage2052, w: 83.851, crop: "h-[211.8%] left-0 top-[-56.52%] w-full" };
const walmart = { img: imgImage2053, w: 81.081, crop: "h-[204.8%] left-0 top-[-53.15%] w-full" };
const paypal = { img: imgImage2054, w: 88.525, crop: "h-[223.61%] left-0 top-[-62.62%] w-full" };
const oracle = { img: imgImage2055, w: 129.808, crop: "h-[327.88%] left-0 top-[-114.42%] w-full" };
const microsoft = { img: imgImage2067, w: 106.299, crop: "h-[268.5%] left-0 top-[-84.65%] w-full" };
const extra = { img: imgImage2066, w: 34.991, crop: "h-[123.33%] left-[-21.45%] top-[-14.65%] w-[139.53%]" };

function VishwaPhoto() {
  return (
    <div className="absolute bottom-[-1.43px] flex h-[192px] items-center justify-center left-[14px] w-[135px]">
      <div className="-rotate-90 flex-none">
        <div className="h-[135px] relative w-[192px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="Vishwa Mohan" className="absolute h-[212.85%] left-[-88.95%] max-w-none top-[-62.06%] w-[225.43%]" src={imgImage2390} />
          </div>
        </div>
      </div>
    </div>
  );
}

function GauravPhoto() {
  return (
    <div className="absolute bottom-[-17.9px] h-[217.896px] left-[7px] w-[160.906px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="Gaurav Kaushik" className="absolute h-[108.75%] left-[-14.62%] max-w-none top-[-8.75%] w-[117.82%]" src={imgImage2056} />
      </div>
    </div>
  );
}

const mentors = [
  { name: "Vishwa Mohan", role: "CEO of upGrad SOT", Photo: VishwaPhoto, rows: [[linkedIn, walmart], [paypal, oracle]], gap: "gap-[12px]" },
  { name: "Gaurav Kaushik", role: "Senior Software Engineer", Photo: GauravPhoto, rows: [[microsoft, extra], [paypal]], gap: "gap-[29px]" },
  { name: "Vishwa Mohan", role: "CEO of upGrad SOT", Photo: VishwaPhoto, rows: [[linkedIn, walmart], [paypal, oracle]], gap: "gap-[12px]" },
];

const edgeFade = "linear-gradient(to var(--dir), #0c0c0c 0%, rgba(12,12,12,0.85) 50%, rgba(12,12,12,0) 100%)";

export default function Mentors() {
  return (
    <section className="flex flex-col gap-[40px] xl:gap-[52px] items-center relative w-full" data-node-id="163:5144">
      <div className="flex flex-col gap-[14px] items-center text-center" data-node-id="163:5145">
        <h2 className="font-avenir font-extrabold leading-[normal] text-[36px] sm:text-[48px] lg:text-[64px] text-white uppercase w-full">
          {`Mentors Who `}<span className="text-[#d4ff5c]">Build</span>
        </h2>
        <p className="font-avenir font-light leading-[normal] text-[#f4f4f5] text-[17px] md:text-[20px] lg:text-[24px] w-full">
          Real mentors. Real experience. Real engineering guidance.
        </p>
      </div>
      <div className="relative w-full max-w-[1280.2px]">
        <div className="flex gap-[16px] sm:gap-[28px] items-center w-full overflow-x-auto snap-x snap-mandatory no-scrollbar xl:overflow-clip" data-node-id="486:31229">
          {mentors.map(({ name, role, Photo, rows, gap }, i) => (
            <div key={i} className="bg-[rgba(255,255,255,0.1)] border border-[rgba(212,255,92,0.4)] border-solid h-[201px] overflow-clip relative shrink-0 w-[436px] snap-start max-sm:[zoom:0.75]">
              <div className="-translate-y-1/2 absolute left-[-1px] size-[228px] top-[calc(50%+90.5px)]">
                <div className="absolute inset-[-131.58%]">
                  <img alt="" className="block max-w-none size-full" src={imgEllipse6} />
                </div>
              </div>
              <Photo />
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col gap-[16px] items-start left-[calc(50%+78.17px)] top-1/2">
                <div className="flex flex-col gap-[8px] items-start whitespace-nowrap">
                  <p className="font-montserrat font-semibold leading-[normal] text-[#d4ff5c] text-[20px]">{name}</p>
                  <p className="font-montserrat font-medium italic leading-[normal] text-[14px] text-white">{role}</p>
                </div>
                <div className="flex flex-col gap-[12px] items-start w-[230.332px]">
                  {rows.map((row, r) => (
                    <div key={r} className={`flex items-center ${r === 0 ? gap : "gap-[12px]"}`}>
                      {row.map((logo) => <Logo key={logo.img} {...logo} />)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden xl:block absolute left-0 top-0 h-[201px] w-[69px] pointer-events-none" style={{ background: edgeFade.replace("var(--dir)", "right") }} data-node-id="486:31272" />
        <div className="hidden xl:block absolute right-0 top-0 h-[201px] w-[69px] pointer-events-none" style={{ background: edgeFade.replace("var(--dir)", "left") }} data-node-id="486:31274" />
      </div>
    </section>
  );
}
