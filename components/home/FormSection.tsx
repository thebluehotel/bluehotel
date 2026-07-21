import { Dictionary } from "@/getDictionary";

export default function FormSection({ dict }: { dict: Dictionary["form"] }) {
  return (
    <section className="bg-zinc-950 w-full py-10 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="flex flex-col">
          <div className="flex items-start gap-3 md:gap-5 mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white leading-[1.1] flex flex-col">
              <span>{dict.title}</span>
            </h2>
          </div>

          <form
            action="https://formspree.io/f/xjgnojgj"
            method="POST"
            className="flex flex-col space-y-10"
          >
            <input
              type="hidden"
              name="_next"
              value="https://www.thebluehotelizmir.com"
            />

            <input
              type="hidden"
              name="_subject"
              value="The Blue Hotel - Yeni İletişim Formu Mesajı"
            />

            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-[11px] md:text-[12px] text-gray-300 mb-1.5 font-medium"
              >
                {dict.nameLabel}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border-b border-white bg-transparent py-1.5 text-white focus:outline-none focus:border-b-2 transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="text-[11px] md:text-[12px] text-gray-300 mb-1.5 font-medium"
              >
                {dict.phoneLabel}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border-b border-white bg-transparent py-1.5 text-white focus:outline-none focus:border-b-2 transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-[11px] md:text-[12px] text-gray-300 mb-1.5 font-medium"
              >
                {dict.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border-b border-white bg-transparent py-1.5 text-white focus:outline-none focus:border-b-2 transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-[11px] md:text-[12px] text-gray-300 mb-1.5 font-medium"
              >
                {dict.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                rows={1}
                required
                className="w-full border-b border-white bg-transparent py-1.5 text-white focus:outline-none focus:border-b-2 transition-all resize-none"
              ></textarea>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="border border-white text-white px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors"
              >
                {dict.submitButton}
              </button>
            </div>
          </form>
        </div>

        <div className="relative w-full h-[450px] lg:h-[630px] flex justify-end mt-10 lg:mt-0">
          <div
            className="w-[85%] lg:w-[80%] h-[85%] lg:h-[90%] bg-cover bg-center bg-gray-200"
            style={{ backgroundImage: "url('/img1.png')" }}
          />

          <div
            className="absolute bottom-0 left-0 lg:-left-10 w-[60%] lg:w-[55%] aspect-video bg-cover bg-center border-[6px] md:border-[10px] border-zinc-950 z-10 shadow-sm"
            style={{ backgroundImage: "url('contact-img-2.jpg')" }}
          />
        </div>
      </div>
    </section>
  );
}
