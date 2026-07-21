import { getDictionary } from "@/getDictionary";
import { Locale } from "@/i18n";

import Hero from "@/components/home/Hero";
import ExperienceSection from "@/components/home/ExperienceSection";
import RoomsSection from "@/components/home/RoomsSection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import FormSection from "@/components/home/FormSection";
import OurHotelSection from "@/components/home/OurHotelSection";
import ReviewsSection from "@/components/home/ReviewsSection";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen">
      <Hero dict={dict.hero} />
      <ExperienceSection dict={dict.experience} />
      <RoomsSection dict={dict.rooms} />
      <AboutSection dict={dict.about} />
      <OurHotelSection dict={dict.ourHotel} />
      <ReviewsSection dict={dict.reviews} />
      <ContactSection dict={dict.contact} />
      <FormSection dict={dict.form} />
    </main>
  );
}
