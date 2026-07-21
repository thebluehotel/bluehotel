import { getDictionary } from "@/getDictionary";
import { Locale } from "@/i18n";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(props: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const params = await props.params;
  const isTr = params.lang === "tr";

  return {
    metadataBase: new URL("https://www.thebluehotelizmir.com"),

    title: isTr ? "The Blue Hotel İzmir" : "The Blue Hotel Izmir",
    description: isTr
      ? "Lüks ve Konforun Tadını Çıkarın"
      : "Enjoy Luxury and Comfort",
    openGraph: {
      title: isTr ? "The Blue Hotel İzmir" : "The Blue Hotel Izmir",
      description: isTr
        ? "Lüks ve Konforun Tadını Çıkarın"
        : "Enjoy Luxury and Comfort",
      url: "https://www.thebluehotelizmir.com",
      siteName: "The Blue Hotel İzmir",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: isTr
            ? "The Blue Hotel İzmir Ön İzleme Görseli"
            : "The Blue Hotel Izmir Preview Image",
        },
      ],
      locale: isTr ? "tr_TR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isTr ? "The Blue Hotel İzmir" : "The Blue Hotel Izmir",
      description: isTr
        ? "Lüks ve Konforun Tadını Çıkarın"
        : "Enjoy Luxury and Comfort",
      images: ["/og-image.png"],
    },
  };
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const lang = params.lang;
  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        nunitoSans.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-zinc-950">
        <Header dict={dict.header} lang={lang} />
        {props.children}
        <Footer dict={dict.footer} lang={lang} />
      </body>
    </html>
  );
}
