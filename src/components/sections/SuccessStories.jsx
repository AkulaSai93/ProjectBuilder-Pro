const assetPathPrefix = "/assets";
const imgImage2097 = `${assetPathPrefix}/7883a.png`;
const imgVector2 = `${assetPathPrefix}/c667d.svg`;

const stories = Array.from({ length: 3 }, () => ({
  quote: "BuildSpace completely changed how I learn. Instead of watching tutorials, I built real projects that gave me the confidence to ship production-ready applications.",
  author: "Deepak Kumar",
}));

export default function SuccessStories() {
  return (
    <section className="flex flex-col items-center relative w-full" data-node-id="163:5466">
      <div className="flex flex-col gap-[40px] xl:gap-[52px] items-center w-full" data-node-id="163:5467">
        <div className="flex flex-col gap-[14px] items-center text-center w-full max-w-[640px]" data-node-id="163:5468">
          <h2 className="font-avenir font-extrabold leading-[normal] text-[36px] sm:text-[48px] lg:text-[64px] text-white uppercase w-full">
            {`Success `}<span className="text-[#d4ff5c]">Stories</span>
          </h2>
          <p className="font-avenir font-light leading-[normal] text-[#f4f4f5] text-[17px] md:text-[20px] lg:text-[24px] w-full">
            Discover how hands-on learning and AI mentorship helped developers succeed
          </p>
        </div>
        <div className="flex flex-wrap xl:flex-nowrap justify-center gap-x-[32px] gap-y-[24px] xl:gap-[57px] items-center w-full" data-node-id="163:5471">
          {stories.map(({ quote, author }, i) => (
            <figure key={i} className="inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start relative shrink-0 max-[420px]:[zoom:0.84]">
              <div className="col-1 row-1 h-[193.185px] w-[378.776px] relative">
                <div className="absolute inset-[0_0_-0.39%_0]">
                  <img alt="" className="block max-w-none size-full" src={imgVector2} />
                </div>
              </div>
              <div className="col-1 row-1 flex flex-col gap-[12.15px] h-[100.238px] items-end leading-[normal] ml-[17.01px] mt-[34.02px] relative text-[14.58px] w-[345.06px]">
                <blockquote className="font-avenir font-light text-[#f4f4f5] text-justify w-[345.06px]">{quote}</blockquote>
                <figcaption className="font-avenir font-extrabold text-[#d4ff5c] text-right w-full">{author}</figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
      <div className="aspect-[872/600.352] relative w-full max-w-[872px]" data-node-id="163:5487">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[145.25%] left-0 max-w-none top-[-45.25%] w-full" src={imgImage2097} />
        </div>
      </div>
    </section>
  );
}
