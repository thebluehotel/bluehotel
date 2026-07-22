"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Dictionary } from "@/getDictionary";
import {
  ArrowLeft,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Wind,
  Coffee,
  Wifi,
  Users,
  Maximize,
  Tv,
  ThermometerSnowflake,
  BoxIcon,
} from "lucide-react";

export default function RoomsSection({ dict }: { dict: Dictionary["rooms"] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [selectedRoomIndex, setSelectedRoomIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

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

  const rooms = [
    {
      id: 1,
      name: dict.items[0].name,
      specs: dict.items[0].specs,
      price: "99",
      images: [
        "/deluxe-room/deluxe-room-1.webp",
        "/deluxe-room/deluxe-room-2.webp",
        "/deluxe-room/deluxe-room-3.webp",
        "/deluxe-room/deluxe-room-4.webp",
        "/deluxe-room/deluxe-room-5.webp",
        "/deluxe-room/deluxe-room-6.webp",
        "/deluxe-room/deluxe-room-7.webp",
      ],
      details: {
        size: "25 m²",
        capacity: dict.items[0].capacity,
        bed: dict.items[0].bed,
      },
      amenities: [
        { icon: ThermometerSnowflake, label: dict.items[0].amenities[0] },
        { icon: Coffee, label: dict.items[0].amenities[1] },
        { icon: Wifi, label: dict.items[0].amenities[2] },
        { icon: Tv, label: dict.items[0].amenities[3] },
      ],
    },
    {
      id: 2,
      name: dict.items[1].name,
      specs: dict.items[1].specs,
      price: "199",
      images: [
        "/junior-suite/junior-suite-1.webp",
        "/junior-suite/junior-suite-2.webp",
        "/junior-suite/junior-suite-3.webp",
        "/junior-suite/junior-suite-4.webp",
        "/junior-suite/junior-suite-5.webp",
        "/junior-suite/junior-suite-6.webp",
      ],
      details: {
        size: "120 m²",
        capacity: dict.items[1].capacity,
        bed: dict.items[1].bed,
      },
      amenities: [
        { icon: ThermometerSnowflake, label: dict.items[1].amenities[0] },
        { icon: Coffee, label: dict.items[1].amenities[1] },
        { icon: Wifi, label: dict.items[1].amenities[2] },
        { icon: Tv, label: dict.items[1].amenities[3] },
        { icon: BoxIcon, label: dict.items[1].amenities[4] },
      ],
    },
    {
      id: 3,
      name: dict.items[2].name,
      specs: dict.items[2].specs,
      price: "299",
      images: [
        "/spa-suite/spa-suite-1.webp",
        "/spa-suite/spa-suite-2.webp",
        "/spa-suite/spa-suite-3.webp",
        "/spa-suite/spa-suite-4.webp",
        "/spa-suite/spa-suite-5.webp",
        "/spa-suite/spa-suite-6.webp",
        "/spa-suite/spa-suite-7.webp",
        "/spa-suite/spa-suite-8.webp",
        "/spa-suite/spa-suite-9.webp",
        "/spa-suite/spa-suite-10.webp",
      ],
      details: {
        size: "30 m²",
        capacity: dict.items[2].capacity,
        bed: dict.items[2].bed,
      },
      amenities: [
        { icon: ThermometerSnowflake, label: dict.items[2].amenities[0] },
        { icon: Coffee, label: dict.items[2].amenities[1] },
        { icon: Wifi, label: dict.items[2].amenities[2] },
        { icon: Wind, label: dict.items[2].amenities[3] },
      ],
    },
  ];

  const openModal = (index: number) => {
    setSelectedRoomIndex(index);
    setCurrentImageIndex(0);
  };

  const closeModal = useCallback(() => {
    setSelectedRoomIndex(null);
    setCurrentImageIndex(0);
  }, []);

  const prevImage = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (selectedRoomIndex === null) return;
      const images = rooms[selectedRoomIndex].images;
      setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    },
    [selectedRoomIndex, rooms]
  );

  const nextImage = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (selectedRoomIndex === null) return;
      const images = rooms[selectedRoomIndex].images;
      setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    },
    [selectedRoomIndex, rooms]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedRoomIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (selectedRoomIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedRoomIndex, closeModal, prevImage, nextImage]);

  useEffect(() => {
    const handleOpenLightbox = (e: Event) => {
      const customEvent = e as CustomEvent;
      openModal(customEvent.detail);
    };

    window.addEventListener("openRoomLightbox", handleOpenLightbox);

    return () => {
      window.removeEventListener("openRoomLightbox", handleOpenLightbox);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="rooms" className="bg-zinc-950 w-full py-16 md:py-20">
        <div className="max-w-[1600px] mx-auto px-8 md:px-20 xl:px-24">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6 md:gap-8">
            <div className="flex items-start gap-3 md:gap-5">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-[1.1]">
                {dict.titleLine1} <br />
                {dict.titleLine2}
              </h2>
            </div>

            <div className="flex items-center gap-2 md:gap-3 self-end lg:self-auto">
              <button
                onClick={() => scroll("left")}
                className="p-2.5 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center"
                aria-label="Previous room"
              >
                <ArrowLeft size={18} strokeWidth={2.5} />
              </button>

              <button
                onClick={() => scroll("right")}
                className="p-2.5 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center"
                aria-label="Next room"
              >
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>

              <Link
                href={`/${lang}/#contact`}
                onClick={(e) => handleScrollToSection(e, "contact")}
                className="ml-2 border border-white text-white px-5 md:px-6 py-2.5 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
              >
                {dict.bookButton}
              </Link>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-6 gap-5 md:gap-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            {rooms.map((room, index) => (
              <div key={room.id} className="flex-none w-[75vw] md:w-[50vw] lg:w-[40vw] snap-start">
                <div onClick={() => openModal(index)} className="block group cursor-pointer">
                  <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-gray-200">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${room.images[0]}')` }}
                    />
                  </div>

                  <div className="flex justify-between items-start mt-4 md:mt-5 text-white">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold tracking-wide group-hover:text-gray-300 transition-colors">
                        {room.name}
                      </h3>
                      <p className="text-[10px] md:text-xs mt-1 text-gray-300 font-medium">
                        {room.specs}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="block text-[9px] md:text-[10px] text-gray-400 font-bold lowercase">
                        {dict.startingFrom}
                      </span>
                      <span className="text-xl md:text-2xl font-bold leading-none">
                        ${room.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedRoomIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-zinc-950/95 backdrop-blur-md text-white overflow-y-auto"
          onClick={closeModal}
        >
          <div className="min-h-screen flex flex-col relative">
            <div className="sticky top-0 w-full flex justify-between items-center p-4 md:p-6 z-50">
              <div className="text-sm font-medium tracking-widest text-white/70 drop-shadow-md uppercase">
                {rooms[selectedRoomIndex].name}
              </div>
              <button
                onClick={closeModal}
                className="hover:text-gray-300 transition-colors bg-black/50 p-2 rounded-full backdrop-blur-sm"
              >
                <X size={24} />
              </button>
            </div>

            <div className="relative flex-1 flex flex-col w-full">
              {rooms[selectedRoomIndex].images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="fixed left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors p-2"
                  >
                    <ChevronLeft size={48} strokeWidth={1} />
                  </button>

                  <button
                    onClick={nextImage}
                    className="fixed right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors p-2"
                  >
                    <ChevronRight size={48} strokeWidth={1} />
                  </button>
                </>
              )}

              <div className="flex-1 w-full flex flex-col items-center justify-center p-4 md:px-24 min-h-[40vh] pb-8">
                <div
                  className="relative w-full h-[50vh] md:h-[60vh]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={rooms[selectedRoomIndex].images[currentImageIndex]}
                    alt={rooms[selectedRoomIndex].name}
                    fill
                    sizes="100vw"
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>

                {rooms[selectedRoomIndex].images.length > 1 && (
                  <div className="mt-4 text-xs font-medium tracking-widest text-white/60">
                    {currentImageIndex + 1} / {rooms[selectedRoomIndex].images.length}
                  </div>
                )}
              </div>

              <div
                className="w-full bg-zinc-900 border-t border-white/10 p-6 md:p-10 flex flex-col items-center justify-center relative z-10 mt-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="max-w-4xl w-full">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-2">
                        {rooms[selectedRoomIndex].name}
                      </h2>
                      <div className="flex flex-wrap gap-4 text-xs md:text-sm text-gray-400 font-medium">
                        <span className="flex items-center gap-1.5">
                          <Maximize size={16} /> {rooms[selectedRoomIndex].details.size}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users size={16} /> {rooms[selectedRoomIndex].details.capacity}
                        </span>
                      </div>
                    </div>

                    <div className="text-left md:text-right">
                      <span className="block text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">
                        {dict.perNight}
                      </span>
                      <span className="text-3xl font-bold text-white">
                        ${rooms[selectedRoomIndex].price}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 border-t border-white/10">
                    {rooms[selectedRoomIndex].amenities.map((item, idx) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={idx} className="flex items-center gap-3 text-gray-300">
                          <div className="p-2 border border-white/20 rounded-sm">
                            <IconComponent size={20} />
                          </div>
                          <span className="text-xs md:text-sm font-medium">
                            {item.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 text-center md:text-left">
                    <Link
                      href="tel:+902324842525"
                      className="bg-white text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors inline-block"
                    >
                      {dict.bookNow}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
