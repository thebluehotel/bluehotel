"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Dictionary } from "@/getDictionary";

export default function Header({
  dict,
  lang: propLang,
}: {
  dict: Dictionary["header"];
  lang: string;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const params = useParams(); 
  
  const lang = (params?.lang as string) || propLang;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openRoomModal = (index: number) => {
    window.dispatchEvent(
      new CustomEvent("openRoomLightbox", { detail: index }),
    );
  };

  const redirectedPathName = (locale: string) => {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const changeLanguage = (locale: string) => {
    const newUrl = redirectedPathName(locale);
    window.location.href = newUrl;
  };

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
    <nav
      className={`fixed top-0 w-full z-50 text-white transition-colors duration-300 h-20 md:h-20 ${
        isScrolled ? "bg-zinc-950/70 backdrop-blur-sm" : "bg-transparent "
      }`}
    >
      <div className="flex items-center justify-between h-full px-8 md:px-20 xl:px-24 w-full">
        <div className="flex items-center h-full space-x-10">
          <Link
            href={`/${lang}`}
            className="h-full flex flex-col justify-center items-center bg-sky-600 text-white px-8 md:px-10"
          >
            <Image
              src="/logo-bluehotel-black.svg"
              alt="The Blue Hotel Izmir Logo"
              width={100}
              height={100}
              className="w-[100px] h-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8 font-bold text-[15px] tracking-wide h-full">
            <Link
              href={`/${lang}`}
              className="hover:opacity-70 transition-opacity"
            >
              {dict.home}
            </Link>

            <div className="relative group h-full flex items-center">
              <Link
                href={`/${lang}/#rooms`}
                onClick={(e) => handleScrollToSection(e, "rooms")}
                className="flex items-center gap-1 hover:opacity-70 transition-opacity"
              >
                {dict.rooms}{" "}
                <ChevronDown
                  size={16}
                  strokeWidth={2.5}
                  className="group-hover:rotate-180 transition-transform"
                />
              </Link>

              <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-zinc-950/95 backdrop-blur-md border border-white/10 shadow-xl min-w-[220px] overflow-hidden">
                <button
                  onClick={() => openRoomModal(0)}
                  className="text-left px-6 py-4 text-sm hover:bg-sky-600 hover:text-black transition-colors border-b border-white/5"
                >
                  {dict.deluxeRoom}
                </button>
                <button
                  onClick={() => openRoomModal(1)}
                  className="text-left px-6 py-4 text-sm hover:bg-sky-600 hover:text-black transition-colors border-b border-white/5"
                >
                  {dict.juniorSuite}
                </button>
                <button
                  onClick={() => openRoomModal(2)}
                  className="text-left px-6 py-4 text-sm hover:bg-sky-600 hover:text-black transition-colors"
                >
                  {dict.spaSuite}
                </button>
              </div>
            </div>

            <Link
              href={`/${lang}/#about-us`}
              onClick={(e) => handleScrollToSection(e, "about-us")}
              className="hover:opacity-70 transition-opacity"
            >
              {dict.about}
            </Link>
            <Link
              href={`/${lang}/#our-hotel`}
              onClick={(e) => handleScrollToSection(e, "our-hotel")}
              className="hover:opacity-70 transition-opacity"
            >
              {dict.ourHotel}
            </Link>
            <Link
              href={`/${lang}/#contact`}
              onClick={(e) => handleScrollToSection(e, "contact")}
              className="hover:opacity-70 transition-opacity"
            >
              {dict.contact}
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-6 font-bold text-sm tracking-wide">
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => changeLanguage("tr")}
              className={`hover:opacity-70 transition-opacity ${
                lang === "tr"
                  ? "underline decoration-sky-500 underline-offset-4"
                  : "opacity-50"
              }`}
            >
              TR
            </button>
            <span>/</span>
            <button
              onClick={() => changeLanguage("en")}
              className={`hover:opacity-70 transition-opacity ${
                lang === "en"
                  ? "underline decoration-sky-500 underline-offset-4"
                  : "opacity-50"
              }`}
            >
              EN
            </button>
          </div>

          <Link
            href={`/${lang}/#contact`}
            onClick={(e) => handleScrollToSection(e, "contact")}
            className="border border-sky-600 text-sky-600 px-6 md:px-8 py-3 md:py-4 uppercase tracking-wider text-xs md:text-sm hover:border-sky-500 hover:text-sky-500 transition-colors"
          >
            {dict.reservation}
          </Link>
        </div>
      </div>
    </nav>
  );
}
