import Header from "@/components/sections/Header";
import Banner from "@/components/sections/Banner";
import Hero from "@/components/sections/Hero";
import WhyBuildspace from "@/components/sections/WhyBuildspace";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import BuildWithConfidence from "@/components/sections/BuildWithConfidence";
import Mentors from "@/components/sections/Mentors";
import Comparison from "@/components/sections/Comparison";
import SuccessStories from "@/components/sections/SuccessStories";
import Marquee from "@/components/sections/Marquee";
import Footer from "@/components/sections/Footer";

// Lime glows from the Figma frame: 546px ellipses, 300px layer blur.
const glows = [
  { left: 796, top: 765, opacity: 0.1 },
  { left: 1182, top: 81, opacity: 0.15 },
  { left: -202, top: 472, opacity: 0.15 },
  { left: 447, top: 1970, opacity: 0.1 },
  { left: 1063, top: 3660, opacity: 0.1 },
];

export default function Home() {
  return (
    <div className="relative w-full overflow-clip bg-[#0c0c0c]" data-node-id="163:4516">
      {/* Glows keep their Figma positions inside a centered 1440px frame. */}
      <div aria-hidden className="absolute inset-y-0 left-1/2 w-[1440px] -translate-x-1/2 pointer-events-none">
      {glows.map(({ left, top, opacity }) => (
        <div
          key={`${left}-${top}`}
          aria-hidden
          className="absolute size-[546px] rounded-full pointer-events-none blur-[300px]"
          style={{ left, top, background: `rgba(212,255,92,${opacity})` }}
        />
      ))}
      </div>

      <div className="relative">
        <Header />
        <Banner />
        <div className="flex justify-center px-4 md:px-8 pt-[96px] md:pt-[140px] xl:pt-[187px]">
          <Hero />
        </div>
        <main className="flex flex-col gap-[96px] md:gap-[140px] xl:gap-[200px] mx-auto mt-[120px] md:mt-[180px] xl:mt-[266px] w-full max-w-[1360px] px-4 md:px-8 xl:px-10" data-node-id="163:4566">
          <WhyBuildspace />
          <FeaturedProjects />
          <BuildWithConfidence />
          <Mentors />
          <Comparison />
          <SuccessStories />
        </main>
        <div className="mt-[64px] xl:mt-[26px]">
          <Marquee />
        </div>
        <div className="mt-[40px] xl:mt-[65px]">
          <Footer />
        </div>
      </div>
      {/* Figma's frame-level noise effect sits on top of all content. */}
      <div aria-hidden className="absolute inset-0 z-30 pointer-events-none bg-[url(/noise.png)] bg-[length:128px_128px]" />
    </div>
  );
}
