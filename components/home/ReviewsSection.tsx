"use client";

import { Star } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Dictionary } from "@/getDictionary";

export default function ReviewsSection({ dict }: { dict: Dictionary["reviews"] }) {
  return (
    <section className="bg-zinc-950 w-full py-20 overflow-hidden relative">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 120s linear infinite;
        }
        .pause-animation {
          animation-play-state: paused;
        }
      `,
        }}
      />

      <div className="w-full px-8 md:px-20 xl:px-24 mb-12 md:mb-16">
        <div className="flex items-start gap-3 md:gap-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-[1.1]">
            {dict.titleLine1} <br /> {dict.titleLine2}
          </h2>
        </div>
      </div>

      <div className="flex overflow-hidden group w-full relative">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="flex animate-marquee group-hover:pause-animation min-w-max"
          >
            {dict.items.map((review, index) => (
              <div
                key={`${i}-${index}`}
                className="bg-zinc-900 border border-white/5 p-6 md:p-8 mx-3 md:mx-4 w-[300px] md:w-[400px] flex-shrink-0 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={16}
                          className={
                            starIndex < review.rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-zinc-600"
                          }
                        />
                      ))}
                    </div>
                    <div className="w-6 h-6 rounded-ful flex items-center justify-center">
                      <FcGoogle size={36} />
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed font-medium mb-6">
                    &quot;{review.text}&quot;
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                  <span className="text-white font-bold text-sm tracking-wide">
                    {review.author}
                  </span>
                  <span className="text-zinc-500 text-xs font-medium">
                    {review.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}

        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}