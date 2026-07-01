"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function IntroOffer() {
  const { t } = useLanguage();
  return <section className="offer-section"><div className="wrap offer-card reveal"><div><div className="eyebrow">{t("offer.eyebrow")}</div><h2>{t("offer.title")}</h2></div><div><p>{t("offer.body")}</p><small>{t("offer.note")}</small></div></div></section>;
}
