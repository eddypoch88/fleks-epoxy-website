"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function ProcessSteps() {
  const { t } = useLanguage();
  return (
    <section id="process" className="section-dark">
      <div className="wrap">
        <div className="sec-head reveal"><div className="eyebrow">{t("process.eyebrow")}</div><h2>{t("process.title")}</h2><p>{t("process.intro")}</p></div>
        <ol className="process-grid">{t("process.steps").map((step, index) => <li className="process-card reveal" key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
      </div>
    </section>
  );
}
