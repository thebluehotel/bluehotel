import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { getDictionary } from "@/getDictionary";
import { Locale } from "@/i18n";

export async function generateMetadata(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const lang = params.lang;
  const isTr = lang === "tr";

  return {
    title: isTr
      ? "Şartlar ve Koşullar | The Blue Hotel İzmir"
      : "Terms & Conditions | The Blue Hotel Izmir",
    description: isTr
      ? "The Blue Hotel İzmir konaklama şartları, koşulları ve iptal politikaları."
      : "The Blue Hotel Izmir accommodation terms, conditions, and cancellation policies.",
  };
}

export default async function TermsAndConditionsPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const lang = params.lang;

  const dict = await getDictionary(lang);
  const t = dict.terms;

  return (
    <main className="min-h-screen bg-zinc-950 text-gray-300 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-8 md:px-12 xl:px-0">
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors mb-10"
        >
          <ChevronLeft size={16} />
          {t.backHome}
        </Link>

        <div className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            {t.title}
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            {t.lastUpdate}:{" "}
            {new Date().toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US")}
          </p>
        </div>

        <div className="space-y-10 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
              {t.section1Title}
            </h2>
            <p>{t.section1Text}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
              {t.section2Title}
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t.bullet1}</li>
              <li>{t.bullet2}</li>
              <li>{t.bullet3}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
              {t.section3Title}
            </h2>
            <p>{t.section3Text}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
              {t.section4Title}
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>{t.rule1Title}</strong> {t.rule1Text}
              </li>
              <li>
                <strong>{t.rule2Title}</strong> {t.rule2Text}
              </li>
              <li>
                <strong>{t.rule3Title}</strong> {t.rule3Text}
              </li>
              <li>
                <strong>{t.rule4Title}</strong> {t.rule4Text}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
              {t.section5Title}
            </h2>
            <p>{t.section5Text}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
              {t.section6Title}
            </h2>
            <p>{t.section6Text}</p>
            <div className="mt-4 p-6 bg-zinc-900 border border-white/5 rounded-sm space-y-1">
              <p>
                <strong>{t.hotelName}</strong>
              </p>
              <p>{t.address}</p>
              <p>{t.email}: info@thebluehotelizmir.com</p>
              <p>{t.phone}: +90 (232) 484 25 25</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
