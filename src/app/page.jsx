import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import RevealManager from "@/components/RevealManager";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyUs />
      <BeforeAfter />
      <Gallery />
      <Pricing />
      <Reviews />
      <FAQ />
      <BookingForm />
      <Footer />
      <WhatsAppFloat />
      <RevealManager />
    </>
  );
}
