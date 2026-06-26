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
          {items.map((rev, idx) => (
            <div key={idx} className={`rev-card reveal delay-${idx + 1}`}>
              <div className="stars">★★★★★</div>
              <p className="rev-q">{rev.q}</p>
              <div className="rev-who">
                <div className="rev-av">{rev.n ? rev.n.substring(0,2).toUpperCase() : ""}</div>
                <div>
                  <div className="rev-n">{rev.n}</div>
                  <div className="rev-r">{rev.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
