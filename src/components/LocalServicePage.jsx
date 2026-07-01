"use client";
import Link from "next/link";
import Header from "./Header";
import TrustBar from "./TrustBar";
import BookingForm from "./BookingForm";
import RelatedServices from "./RelatedServices";
import FinalCta from "./FinalCta";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import RevealManager from "./RevealManager";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";
import { getCopy } from "@/lib/i18n/get-copy";
import { trackWA } from "@/utils/trackWA";

export default function LocalServicePage({ page }) {
  const { locale } = useLanguage();
  const copy = getCopy(locale);
  const content = page.content[locale] || page.content.ms;
  const waUrl = `https://wa.me/60146211263?text=${encodeURIComponent(copy.header.waMsg)}`;
  return <><Header /><main>
    <section className="service-hero"><div className="wrap"><div className="breadcrumbs"><Link href="/">FLEKS Epoxy</Link><span>/</span><span>{content.h1}</span></div><div className="service-hero-grid"><div><div className="eyebrow">{page.area} · FLEKS Epoxy</div><h1>{content.h1}</h1><p className="section-lead">{content.intro}</p><div className="service-cta-row"><Link className="btn btn-primary" href="#contact">{copy.header.btnBook}</Link><a className="btn btn-wa" href={waUrl} target="_blank" rel="noopener noreferrer" onClick={trackWA}><WhatsAppIcon /> {copy.header.wa}</a></div></div><aside className="service-hero-card"><span>{copy.pricing.eyebrow}</span><strong>{copy.pricing.range}{copy.pricing.unit}</strong><p>{content.price}</p></aside></div></div></section>
    <TrustBar />
    <section><div className="wrap service-content"><article className="content-card reveal"><div className="eyebrow">01 · {page.area}</div><h2>{content.problemsTitle}</h2><ul>{content.problems.map((item) => <li key={item}>{item}</li>)}</ul></article><article className="content-card system reveal"><div className="eyebrow">02 · Epoxy system</div><h2>{content.systemTitle}</h2><p>{content.system}</p></article></div></section>
    <section className="service-process"><div className="wrap"><div className="sec-head reveal"><div className="eyebrow">{copy.process.eyebrow}</div><h2>{copy.process.title}</h2><p>{copy.process.intro}</p></div><div className="service-process-grid">{copy.process.steps.slice(0,4).map((step,index) => <div className="reveal" key={step.title}><span>0{index+1}</span><h3>{step.title}</h3></div>)}</div><p className="service-price-note">{content.price}</p></div></section>
    <section className="local-faq" id="faq"><div className="wrap"><div className="sec-head reveal"><div className="eyebrow">FAQ · {page.area}</div><h2>{copy.faq.title}</h2></div><div className="faq-list">{content.faq.map((item) => <details className="faq reveal" key={item.q}><summary>{item.q}</summary><div className="faq-a">{item.a}</div></details>)}</div></div></section>
    <BookingForm /><RelatedServices compact exclude={`/${page.slug}`} /><FinalCta />
  </main><Footer /><WhatsAppFloat /><RevealManager /></>;
}
