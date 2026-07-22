"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Dictionary } from "@/getDictionary";

export default function Hero({ dict }: { dict: Dictionary["hero"] }) {
  const params = useParams();
  const pathname = usePathname();
  
  const lang = (params?.lang as string) || "tr";

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (pathname === `/${lang}` || pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center bg-slate-900 mb-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 md:bg-gradient-to-r md:from-black/70 md:via-black/20 md:to-transparent" />
      </div>

      <div className="relative z-10 w-full px-8 md:px-20 xl:px-24 flex flex-col justify-center">
        <div className="max-w-2xl mt-16 md:mt-24">
          <span className="block uppercase tracking-[0.2em] text-xs md:text-sm mb-4 md:mb-6 font-bold text-white">
            {dict.subtitle}
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-[85px] font-bold text-white mb-8 md:mb-12 leading-[1.05] uppercase tracking-tight break-words">
            {dict.titleLine1} <br />
            {dict.titleLine2} <br />
            {dict.titleLine3}
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl font-light mb-4">
            {dict.description}
          </p>

          <Link
            href={`/${lang}/#rooms`}
            onClick={(e) => handleScrollToSection(e, "rooms")}
            className="inline-block border border-white text-white px-8 py-4 text-xs md:text-sm font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-colors duration-300"
          >
            {dict.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
