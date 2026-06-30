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
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px", gap: "12px" }} className="reveal">
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "15px", color: "var(--text-muted, #888)" }}>
            <span style={{ color: "#FBBC04", fontSize: "18px" }}>★★★★★</span>
            <span style={{ fontWeight: 700, color: "var(--text)", fontSize: "16px" }}>5.0</span>
            <span>· 3 Google reviews</span>
          </div>
          <a
            className="btn btn-ghost"
            href="https://g.page/r/CYLVAp7XCDdaEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: "12px 28px" }}
          >
            ⭐ {t("reviews.btnWrite")}
          </a>
          <p style={{ fontSize: "13px", color: "var(--text-muted, #999)", margin: 0, textAlign: "center" }}>
            {t("reviews.reviewHelp") || "Every review helps our local business grow 🙏"}
          </p>
        </div>
      </div>
    </section>
  );
}
