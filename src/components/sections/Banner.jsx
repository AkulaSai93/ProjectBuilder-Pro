const assetPathPrefix = "/assets";
const imgKidStar = `${assetPathPrefix}/15720.svg`;

export default function Banner() {
  return (
    <div className="border-[#d4ff5c] border-b border-solid flex min-h-[60px] items-center justify-center px-4 py-2 w-full" data-node-id="163:4540">
      <div className="flex flex-wrap justify-center gap-x-[8px] gap-y-1 items-center translate-y-[0.5px]" data-node-id="163:4541">
        <p className="font-avenir font-normal leading-[normal] text-[14px] sm:text-[16px] text-white whitespace-nowrap">{`Download the App & Get`}</p>
        <div className="flex gap-[6px] items-center shrink-0">
          <div className="relative shrink-0 size-[20px] sm:size-[24px] -translate-y-[2px] sm:-translate-y-[2.5px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgKidStar} />
          </div>
          <p className="font-avenir font-extrabold leading-[normal] text-[#d4ff5c] text-[20px] sm:text-[24px] whitespace-nowrap">
            500 <span className="uppercase">free</span> credits
          </p>
        </div>
      </div>
    </div>
  );
}
