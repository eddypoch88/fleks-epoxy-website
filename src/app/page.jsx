import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import LocalTeamSection from "@/components/LocalTeamSection";
import ProblemSolution from "@/components/ProblemSolution";
import ProcessSteps from "@/components/ProcessSteps";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import Pricing from "@/components/Pricing";
import IntroOffer from "@/components/IntroOffer";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import RelatedServices from "@/components/RelatedServices";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import RevealManager from "@/components/RevealManager";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import { ms } from "@/lib/i18n/locales/ms";

export default function Home() {
  return <><LocalBusinessSchema /><FAQSchema items={ms.faq.items} /><Header /><main><Hero /><TrustBar /><LocalTeamSection /><ProblemSolution /><ProcessSteps /><CaseStudyGrid /><Pricing /><IntroOffer /><BookingForm /><FAQ /><RelatedServices /><FinalCta /></main><Footer /><WhatsAppFloat /><RevealManager /></>;
}
