"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function ProblemSolution() {
  const { t } = useLanguage();
  return (
    <section id="why">
      <div className="wrap problem-grid">
        <div className="reveal"><div className="eyebrow">{t("problem.eyebrow")}</div><h2>{t("problem.title")}</h2><p className="section-lead">{t("problem.body")}</p></div>
        <div className="problem-panels reveal">
          <div className="problem-panel"><span className="panel-label">01</span><ul>{t("problem.problems").map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="problem-panel accent-panel"><span className="panel-label">{t("problem.checkTitle")}</span><ul>{t("problem.checks").map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div>
      </div>
    </section>
  );
}
