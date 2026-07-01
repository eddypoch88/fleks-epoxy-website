"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { serviceLinks } from "@/lib/service-links";

export default function RelatedServices({ compact = false, exclude }) {
  const { locale, t } = useLanguage();
  const links = serviceLinks.filter((item) => item.href !== exclude);
  return (
    <section id="services" className={`related-section ${compact ? "compact" : ""}`}>
      <div className="wrap"><div className="sec-head reveal"><div className="eyebrow">{t("related.eyebrow")}</div><h2>{t("related.title")}</h2><p>{t("related.subtitle")}</p></div>
        <div className="service-link-grid">{links.map((item) => <Link key={item.href} href={item.href}><span>{item.labels[locale]}</span><small>{t("related.label")} →</small></Link>)}</div>
      </div>
    </section>
  );
}
