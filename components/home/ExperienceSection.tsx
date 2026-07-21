import Link from "next/link";
import { Dictionary } from "@/getDictionary";

export default function ExperienceSection({ dict }: { dict: Dictionary["experience"] }) {
  return (
    <section className="bg-black w-full px-8 md:px-20 xl:px-24 py-20 md:py-32">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:h-[450px]">
          <div className="col-span-1 lg:col-span-2 bg-sky-600 p-8 md:p-16 flex flex-col justify-between">
            <h2 className="text-black text-3xl md:text-[40px] font-bold uppercase tracking-[0.15em] leading-snug">
              {dict.mainTitleLine1} <br />
              {dict.mainTitleLine2}
              <br />
              {dict.mainTitleLine3}
            </h2>
            <div className="mt-16 md:mt-0 text-black text-[13px] md:text-sm font-bold uppercase tracking-wider text-right self-end max-w-[250px]">
              {dict.mainDescription}
            </div>
          </div>

          <Link
            href="/#rooms"
            className="col-span-1 relative min-h-[300px] lg:min-h-0 block group overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: "url('/experience-img-1.webp')",
              }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
            <span className="absolute bottom-8 right-8 text-white text-xs md:text-sm font-bold uppercase tracking-widest text-right z-10">
              {dict.linkRoomsLine1} <br /> {dict.linkRoomsLine2}
            </span>
          </Link>

          <Link
            href="/#about-us"
            className="col-span-1 relative min-h-[300px] lg:min-h-0 block group overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: "url('/experience-img-2.webp')",
              }}
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
            <span className="absolute bottom-8 right-8 text-white text-xs md:text-sm font-bold uppercase tracking-widest text-right z-10">
              {dict.linkAboutLine1} <br /> {dict.linkAboutLine2}
            </span>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mt-20 gap-10">
          <h3 className="text-sky-600 text-5xl md:text-7xl lg:text-[80px] font-bold uppercase leading-[1.05] tracking-tight">
            {dict.secondaryTitleLine1} <br />
            {dict.secondaryTitleLine2} <br />
            {dict.secondaryTitleLine3}
          </h3>

          <div className="text-white text-sm md:text-base font-bold uppercase tracking-[0.2em] text-left lg:text-right">
            <span className="text-sky-600 block mb-2">{dict.premiumBadge}</span>
            {dict.sloganLine1} <br />
            {dict.sloganLine2}
          </div>
        </div>
      </div>
    </section>
  );
}