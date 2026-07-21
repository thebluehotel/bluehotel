"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dictionary } from "@/getDictionary";

export default function OurHotelSection({ dict }: { dict: Dictionary["ourHotel"] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryImages = [
    { id: 1, src: "/hotel/hotel-img-1.webp", alt: `${dict.imageAltPrefix} 1` },
    { id: 2, src: "/hotel/hotel-img-2.webp", alt: `${dict.imageAltPrefix} 2` },
    { id: 3, src: "/hotel/hotel-img-3.webp", alt: `${dict.imageAltPrefix} 3` },
    { id: 4, src: "/hotel/hotel-img-4.webp", alt: `${dict.imageAltPrefix} 4` },
    { id: 5, src: "/hotel/hotel-img-5.webp", alt: `${dict.imageAltPrefix} 5` },
    { id: 6, src: "/hotel/hotel-img-6.webp", alt: `${dict.imageAltPrefix} 6` },
    { id: 7, src: "/hotel/hotel-img-7.webp", alt: `${dict.imageAltPrefix} 7` },
    { id: 8, src: "/hotel/hotel-img-8.webp", alt: `${dict.imageAltPrefix} 8` },
    { id: 9, src: "/hotel/hotel-img-9.webp", alt: `${dict.imageAltPrefix} 9` },
  ];

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const prevImage = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (selectedIndex === null) return;
      setSelectedIndex(
        selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1,
      );
    },
    [selectedIndex, galleryImages.length],
  );

  const nextImage = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (selectedIndex === null) return;
      setSelectedIndex(
        selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1,
      );
    },
    [selectedIndex, galleryImages.length],
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex, closeModal, prevImage, nextImage]);

  return (
    <>
      <section
        id="our-hotel"
        className="w-full bg-zinc-950 py-20 px-8 md:px-20 xl:px-24 relative"
      >
        <div className="relative z-10 w-full mb-12 md:mb-16">
          <div className="flex justify-center gap-3 md:gap-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-[1.1]">
              {dict.title}
            </h2>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
          <div className="w-[80%] h-[30%] bg-zinc-800 absolute top-[35%] opacity-50"></div>
          <div className="w-[30%] h-[80%] bg-zinc-800 absolute left-[35%] opacity-50"></div>
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {galleryImages.map((img, index) => (
              <div
                key={img.id}
                onClick={() => setSelectedIndex(index)}
                className="relative aspect-square w-full cursor-pointer overflow-hidden group shadow-sm"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${img.src}')` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black text-white flex flex-col justify-between"
          onClick={closeModal}
        >
          <div className="w-full flex justify-between items-center p-4 md:p-6 bg-black/50 absolute top-0 left-0 z-10">
            <div className="text-sm font-medium tracking-widest">
              {selectedIndex + 1} / {galleryImages.length}
            </div>

            <div className="flex items-center space-x-6 text-gray-400">
              <button
                onClick={closeModal}
                className="hover:text-white transition-colors ml-4"
                title={dict.close}
              >
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="relative flex-1 flex items-center justify-center w-full h-full p-4 md:p-12">
            <button
              onClick={prevImage}
              className="absolute left-4 md:left-10 z-10 text-gray-400 hover:text-white transition-colors p-4"
            >
              <ChevronLeft size={40} strokeWidth={1} />
            </button>

            <div
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                fill
                sizes="100vw"
                className="object-contain cursor-default"
                priority
              />
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 md:right-10 z-10 text-gray-400 hover:text-white transition-colors p-4"
            >
              <ChevronRight size={40} strokeWidth={1} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}