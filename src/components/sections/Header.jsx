"use client";

import { useState } from "react";

const assetPathPrefix = "/assets";
const imgImage14 = `${assetPathPrefix}/d9aa5.png`;
const imgLine8 = `${assetPathPrefix}/9a324.svg`;
const imgLine9 = `${assetPathPrefix}/608d2.svg`;
const imgArrowOutward = `${assetPathPrefix}/7dcf9.svg`;

const navLinks = ["Features", "Projects", "Pricing"];

function VerticalLine({ src, length }) {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-0" style={{ height: length }}>
      <div className="flex-none rotate-90">
        <div className="h-0 relative" style={{ width: length }}>
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={src} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black border-[#d4ff5c] border-b border-solid relative z-20 w-full" data-node-id="163:4518">
      <div className="relative mx-auto max-w-[1440px] flex h-[60px] items-center justify-between pl-4 md:pl-8 xl:pl-[80px] pr-2 md:pr-6 xl:pr-[82px]">
        <div className="flex gap-[17px] h-[60px] items-center" data-node-id="163:4526">
          <a href="#" className="flex gap-[8px] items-center shrink-0" data-node-id="163:4527">
            <div className="h-[34px] w-[27px] sm:h-[42px] sm:w-[33.26px] relative shrink-0" data-node-id="163:4528">
              <img alt="BuildSpace logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage14} />
            </div>
            <p className="font-avenir font-black leading-[normal] text-[#d4ff5c] text-[20px] sm:text-[24px] whitespace-nowrap">BuildSpace</p>
          </a>
          <div className="hidden lg:flex">
            <VerticalLine src={imgLine8} length={60} />
          </div>
        </div>

        <nav className="hidden lg:flex absolute left-[calc(50%-3px)] -translate-x-1/2 gap-[26.667px] items-center" data-node-id="163:4519">
          {navLinks.map((label) => (
            <a key={label} href={`#${label.toLowerCase()}`} className="font-avenir font-normal leading-[normal] text-[18px] text-white uppercase whitespace-nowrap hover:text-[#d4ff5c] transition-colors">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center self-start" data-node-id="163:4531">
          <a href="#" className="flex flex-col h-[60px] items-start justify-center px-[14px] py-[8px] font-avenir font-normal leading-[normal] text-[18px] text-white whitespace-nowrap hover:text-[#d4ff5c] transition-colors">
            Log In
          </a>
          <VerticalLine src={imgLine9} length={60} />
          <a href="#" className="bg-gradient-to-b flex from-[rgba(244,236,223,0)] gap-[4px] h-[60px] items-center justify-center pl-[14px] pr-[12px] py-[8px] to-[rgba(244,236,223,0.16)] hover:to-[rgba(244,236,223,0.28)]" data-node-id="163:4535">
            <span className="font-avenir font-normal leading-[normal] text-[18px] text-white whitespace-nowrap">Start Building</span>
            <span className="relative shrink-0 size-[24px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowOutward} />
            </span>
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="lg:hidden md:ml-2 flex size-[44px] flex-col items-center justify-center gap-[6px]"
        >
          <span className={`block h-[2px] w-[22px] bg-white transition-transform ${open ? "translate-y-[8px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-[22px] bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-[22px] bg-white transition-transform ${open ? "-translate-y-[8px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute inset-x-0 top-full bg-black border-b border-[#d4ff5c] px-4 md:px-8 pb-6 pt-2">
          <nav className="flex flex-col">
            {navLinks.map((label) => (
              <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 font-avenir font-normal text-[18px] text-white uppercase hover:text-[#d4ff5c]">
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3 md:hidden">
            <a href="#" className="py-3 text-center font-avenir font-normal text-[18px] text-white border border-white/20">Log In</a>
            <a href="#" className="flex items-center justify-center gap-[4px] py-3 bg-[#d4ff5c] font-avenir font-extrabold text-[18px] text-black">Start Building</a>
          </div>
        </div>
      )}
    </header>
  );
}
