"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const items = t("faq.items") || [];

  return (
    <section id="faq" style={{ background: "var(--bg2)" }}>
      <div className="wrap">
        <div className="sec-head reveal" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
          <div className="eyebrow">{t("faq.eyebrow")}</div>
          <h2>{t("faq.title")}</h2>
          <p>{t("faq.subtitle")}</p>
        </div>
        <div className="faq-list">
          {items.map((item, idx) => (
            <details key={idx} className="faq reveal">
              <summary>{item.q}</summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
