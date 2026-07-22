"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { Dictionary } from "@/getDictionary";
import {
  FaFacebookF,
  FaInstagram,
  FaTripadvisor,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer({
  dict,
  lang: propLang,
}: {
  dict: Dictionary["footer"];
  lang: string;
}) {
  const params = useParams();
  const pathname = usePathname();

  const lang = (params?.lang as string) || propLang;

  const openRoomModal = (index: number) => {
    window.dispatchEvent(
      new CustomEvent("openRoomLightbox", { detail: index }),
    );
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
    <footer className="bg-black text-white w-full pt-20 pb-8">
      <div className="w-full px-8 md:px-20 lg:px-24 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="flex flex-col">
            <Link href={`/${lang}`} className="flex flex-col mb-8">
              <Image
                src="/logo-bluehotel-white.svg"
                alt="The Blue Hotel Izmir Logo"
                width={100}
                height={100}
                className="w-[100px] h-auto"
              />
            </Link>

            <div className="text-[14px] text-gray-300 space-y-6 font-medium">
              <p>
                {dict.addressLine1} <br />
                {dict.addressLine2}
              </p>
              <Link href="tel:+902324842525"> +90 (232) 484 25 25 </Link> <br />
              <Link href="mailto:info@thebluehotelizmir.com">
                info@thebluehotelizmir.com
              </Link>
              <div className="flex items-center space-x-5 mt-4 pt-2">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaFacebookF size={18} />
                </Link>

                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaInstagram size={20} />
                </Link>

                <Link
                  href="https://wa.me/902324842525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaWhatsapp size={22} />
                </Link>

                <Link
                  href="https://www.tripadvisor.com.tr/Hotel_Review-g15263864-d634529"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaTripadvisor size={22} />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-5 text-[15px] font-medium text-gray-300 pt-2 md:pt-14">
            <Link
              href={`/${lang}`}
              className="hover:text-white transition-colors"
            >
              {dict.home}
            </Link>
            <Link
              href={`/${lang}/#about-us`}
              onClick={(e) => handleScrollToSection(e, "about-us")}
              className="hover:text-white transition-colors"
            >
              {dict.about}
            </Link>
            <Link
              href={`/${lang}/#our-hotel`}
              onClick={(e) => handleScrollToSection(e, "our-hotel")}
              className="hover:text-white transition-colors"
            >
              {dict.ourHotel}
            </Link>
            <Link
              href={`/${lang}/#contact`}
              onClick={(e) => handleScrollToSection(e, "contact")}
              className="hover:text-white transition-colors"
            >
              {dict.contact}
            </Link>
          </div>

          <div className="flex flex-col items-start space-y-5 text-[15px] font-medium text-gray-300 pt-2 md:pt-14">
            <Link
              href={`/${lang}/#rooms`}
              onClick={(e) => handleScrollToSection(e, "rooms")}
              className="hover:text-white transition-colors"
            >
              {dict.rooms}
            </Link>
            <button
              onClick={() => openRoomModal(0)}
              className="hover:text-white transition-colors text-left"
            >
              {dict.deluxeRoom}
            </button>
            <button
              onClick={() => openRoomModal(1)}
              className="hover:text-white transition-colors text-left"
            >
              {dict.juniorSuite}
            </button>
            <button
              onClick={() => openRoomModal(2)}
              className="hover:text-white transition-colors text-left"
            >
              {dict.spaSuite}
            </button>
          </div>

          <div className="flex flex-col pt-2 md:pt-14">
            <p className="text-xl md:text-2xl font-bold leading-snug mb-8">
              {dict.slogan} <br />
            </p>
            <div>
              <Link
                href={`/${lang}/#contact`}
                onClick={(e) => handleScrollToSection(e, "contact")}
                className="inline-block border border-white text-white px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
              >
                {dict.bookButton}
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/10 mt-20 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[13px] font-medium text-gray-400 gap-4">
          <p>
            © {new Date().getFullYear()} The Blue Hotel Izmir. {dict.rights} |
            Powered by{" "}
            <Link
              href="https://www.ekursoft.com"
              target="_blank"
              className="font-bold text-sky-600 hover:text-sky-500 transition-colors"
            >
              Ekursoft
            </Link>
          </p>
          <div className="flex space-x-6">
            <Link
              href={`/${lang}/terms`}
              className="hover:text-white transition-colors"
            >
              {dict.terms}
            </Link>
            <Link
              href={`/${lang}/privacy`}
              className="hover:text-white transition-colors"
            >
              {dict.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
