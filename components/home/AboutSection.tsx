"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Dictionary } from "@/getDictionary";

export default function AboutSection({ dict }: { dict: Dictionary["about"] }) {
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
    <section id="about-us" className="bg-[#111111] text-white w-full py-24">
      <div className="w-full px-8 md:px-20 xl:px-24 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="relative pb-10 lg:pb-0 pr-8 lg:pr-12">
            <div
              className="w-full aspect-[4/3] md:aspect-[5/4] bg-cover bg-center bg-gray-800"
              style={{
                backgroundImage: "url('/about-img-1.webp')",
              }}
            />

            <div
              className="absolute -bottom-4 right-0 md:-bottom-10 md:-right-4 lg:-right-10 w-1/2 aspect-[4/3] bg-cover bg-center border-[6px] border-[#111111] z-10"
              style={{
                backgroundImage: "url('/about-img-2.webp')",
              }}
            />
          </div>

          <div className="flex flex-col pt-8 lg:pt-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[1.1] mb-4">
              <span>{dict.title}</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-[15px] leading-loose mb-6 font-medium">
              {dict.paragraph1}
            </p>
            <p className="text-gray-300 text-sm md:text-[15px] leading-loose mb-10 font-medium">
              {dict.paragraph2}
            </p>

            <div>
              <Link
                href={`/${lang}/#contact`}
                onClick={(e) => handleScrollToSection(e, "contact")}
                className="inline-block border border-white text-white px-10 py-3 md:py-4 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-300"
              >
                {dict.button}
              </Link>
            </div>

            <div className="mt-8">
              <a
                href="tel:+902324842525"
                className="text-white text-xs md:text-sm font-bold uppercase tracking-[0.15em] hover:text-gray-300 transition-colors"
              >
                +90 (232) 484 25 25
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
