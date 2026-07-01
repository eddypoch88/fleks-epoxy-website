"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();
  return (
    <section id="pricing" className="section-warm">
      <div className="wrap pricing-layout">
        <div className="reveal"><div className="eyebrow">{t("pricing.eyebrow")}</div><h2>{t("pricing.title")}</h2><p className="section-lead">{t("pricing.subtitle")}</p><p className="pricing-note">{t("pricing.note")}</p></div>
        <div className="pricing-card reveal"><div className="price-range">{t("pricing.range")}<span>{t("pricing.unit")}</span></div><ul>{t("pricing.points").map((point) => <li key={point}>{point}</li>)}</ul><Link className="btn btn-primary" href="#contact">{t("pricing.btnBook")}</Link></div>
      </div>
    </section>
  );
}
