import { Dictionary } from "@/getDictionary";

export default function ContactSection({ dict }: { dict: Dictionary["contact"] }) {
  return (
    <section id="contact" className="w-full pt-16 md:pt-24 pb-10">
      <div className="w-full px-8 md:px-20 xl:px-24 mb-5 md:mb-10">
        <div className="flex items-start gap-3 md:gap-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-[1.1]">
            {dict.title}
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 bg-zinc-950 py-5 md:py-10 px-8 md:px-20 xl:px-24 flex flex-col justify-center">
          <div className="max-w-md space-y-12">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">
                {dict.addressTitle}
              </h3>
              <p className="text-[15px] text-gray-300 font-medium leading-relaxed">
                {dict.addressLine1} <br />
                {dict.addressLine2}
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">
                {dict.phoneTitle}
              </h3>
              <div className="space-y-4">
                <p className="text-[15px] text-gray-300 font-medium leading-relaxed">
                  <a
                    href="tel:+902324842525"
                    className="hover:text-white transition-colors"
                  >
                    +90 (232) 484 25 25
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">
                {dict.emailTitle}
              </h3>
              <a
                href="mailto:info@thebluehotelizmir.com"
                className="text-[15px] text-gray-300 font-medium hover:text-white transition-colors"
              >
                info@thebluehotelizmir.com
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 min-h-[400px] md:min-h-full pr-8 py-5 md:py-10 px-8 md:px-20">
          <div className="relative w-full h-full min-h-[400px] md:min-h-full bg-gray-200 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.7499307679254!2d27.146761299999998!3d38.4241436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8f4633aeabd%3A0xfaa30a63acfa650f!2sThe%20Blue%20Hotel%20%C4%B0zmir!5e0!3m2!1str!2str!4v1784559555557!5m2!1str!2str"
              className="absolute top-0 left-0 w-full h-[calc(100%+65px)] border-0 grayscale invert-[100%] contrast-[90%] hue-rotate-180"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}