"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const images = ["gallery-1.webp", "gallery-4.webp", "gallery-3.webp", "gallery-2.webp", "gallery-6.webp", "gallery-5.webp"];

export default function CaseStudyGrid() {
  const { t } = useLanguage();
  return (
    <section id="gallery">
      <div className="wrap">
        <div className="sec-head reveal"><div className="eyebrow">{t("gallery.eyebrow")}</div><h2>{t("gallery.title")}</h2><p>{t("gallery.subtitle")}</p></div>
        <div className="case-grid">
          {t("gallery.items").map((item, index) => (
            <article className="case-card reveal" key={item.title}>
              <div className="case-image"><Image src={`/processed/${images[index]}`} alt={item.alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" /><span className="case-label">{t("gallery.ideaLabel")}</span></div>
              <div className="case-body"><h3>{item.title}</h3><dl><div><dt>{t("gallery.locationLabel")}</dt><dd>{item.space}</dd></div><div><dt>{t("gallery.systemLabel")}</dt><dd>{item.system}</dd></div></dl><p>{t("gallery.note")}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
