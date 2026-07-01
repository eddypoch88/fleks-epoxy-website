"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { trackWA } from "@/utils/trackWA";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function Hero() {
  const { t } = useLanguage();
  const waGeneral = `https://wa.me/60146211263?text=${encodeURIComponent(t("header.waMsg"))}`;
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <picture>
          <source media="(max-width: 760px)" srcSet="/processed/hero-epoxy-mobile.webp" type="image/webp" />
          <img src="/processed/hero-epoxy-desktop.webp" alt="" width="1400" height="788" fetchPriority="high" />
        </picture>
        <div className="hero-overlay" />
      </div>
      <div className="wrap hero-content">
        <div className="hero-copy reveal in">
          <div className="badge">{t("hero.badge")}</div>
          <h1>{t("hero.title")}</h1>
          <p className="lead">{t("hero.subtitle")}</p>
          <div className="hero-btns">
            <Link className="btn btn-primary" href="#contact">{t("hero.btnBook")}</Link>
            <a className="btn btn-wa" href={waGeneral} target="_blank" rel="noopener noreferrer" onClick={trackWA}><WhatsAppIcon /> {t("hero.btnWa")}</a>
          </div>
          <div className="hero-proof"><span>{t("hero.imageLabel")}</span><p>{t("hero.imageNote")}</p></div>
        </div>
      </div>
    </section>
  );
}
