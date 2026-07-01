"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyUs() {
  const { t } = useLanguage();
  return (
    <section id="why">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">{t("why.eyebrow")}</div>
          <h2>{t("why.title")}</h2>
          <p>{t("why.subtitle")}</p>
        </div>
        <div className="why-grid">
          <div className="why-card reveal delay-1">
            <div className="why-ico"><i className="ph-light ph-drop"></i></div>
            <h3>{t("why.c1T")}</h3>
            <p>{t("why.c1S")}</p>
          </div>
          <div className="why-card reveal delay-2">
            <div className="why-ico"><i className="ph-light ph-shield-check"></i></div>
            <h3>{t("why.c2T")}</h3>
            <p>{t("why.c2S")}</p>
          </div>
          <div className="why-card reveal delay-3">
            <div className="why-ico"><i className="ph-light ph-lightning"></i></div>
            <h3>{t("why.c3T")}</h3>
            <p>{t("why.c3S")}</p>
          </div>
          <div className="why-card reveal delay-4">
            <div className="why-ico"><i className="ph-light ph-palette"></i></div>
            <h3>{t("why.c4T")}</h3>
            <p>{t("why.c4S")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
