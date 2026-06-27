"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function Reviews() {
  const { t } = useLanguage();
  const items = t("reviews.items") || [];

  return (
    <section id="reviews">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">{t("reviews.eyebrow")}</div>
          <h2>{t("reviews.title")}</h2>
          <p>{t("reviews.subtitle")}</p>
        </div>
        <div className="rev-grid">
          {items.map((item, idx) => (
            <div key={idx} className={`rev-card reveal delay-${idx + 1}`}>
              <div className="stars" style={{ fontSize: "28px", color: "var(--accent)" }}>✓</div>
              <div className="rev-n" style={{ fontSize: "18px", margin: "6px 0 10px" }}>{item.h}</div>
              <p className="rev-q" style={{ fontStyle: "normal" }}>{item.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
