"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();

  // Bila client tekan card, simpan index servis & redirect ke booking form
  // 0 = Kediaman/Residential, 1 = Komersial/Commercial (konsisten semua bahasa)
  const pickService = (idx) => {
    try { sessionStorage.setItem("fleks_service_idx", String(idx)); } catch (e) {}
  };

  return (
    <section id="pricing" style={{ background: "var(--bg2)" }}>
      <div className="wrap">
        <div className="sec-head reveal" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
          <div className="eyebrow">{t("pricing.eyebrow")}</div>
          <h2>{t("pricing.title")}</h2>
          <p>{t("pricing.subtitle")}</p>
        </div>
        <div className="price-grid price-grid-2">
          <div className="plan reveal delay-1">
            <h3>{t("pricing.p1T")}</h3>
            <div className="blurb">{t("pricing.p1S")}</div>
            <div className="price">RM 28 <span>{t("pricing.sqft")}</span></div>
            <ul>
              {t("pricing.f1").map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
            <a className="btn btn-ghost" href="#contact" onClick={() => pickService(0)}>{t("pricing.btnBook")}</a>
          </div>
          <div className="plan popular reveal delay-2">
            <div className="pop-tag">{t("pricing.popTag")}</div>
            <h3>{t("pricing.p2T")}</h3>
            <div className="blurb">{t("pricing.p2S")}</div>
            <div className="price">RM 32 <span>{t("pricing.sqft")}</span></div>
            <ul>
              {t("pricing.f2").map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
            <a className="btn btn-primary" href="#contact" onClick={() => pickService(1)}>{t("pricing.btnBook")}</a>
          </div>
        </div>
        <p className="price-note">{t("pricing.note")}</p>
      </div>
    </section>
  );
}
