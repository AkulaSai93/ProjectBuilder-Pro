const assetPathPrefix = "/assets";
const imgImage = `${assetPathPrefix}/7fdbd.png`;

function Run() {
  return (
    <div className="flex gap-[22.5px] items-center shrink-0 pr-[22.5px]">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex gap-[22.5px] items-center shrink-0">
          <p className="font-avenir font-medium leading-[normal] text-[90px] text-white tracking-[-3.6571px] whitespace-nowrap">Build Without Limits</p>
          <div className="h-[62.857px] relative rounded-[10px] shrink-0 w-[160px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  // Figma frame starts at x=-629; the animation scrolls one full run so the loop is seamless.
  return (
    <div className="overflow-hidden w-full h-[108px] max-md:[zoom:0.55] md:max-xl:[zoom:0.8]" data-node-id="163:5510">
      <div className="flex w-max animate-[marquee_40s_linear_infinite] ml-[-629px]">
        <Run />
        <Run />
      </div>
    </div>
  );
}
