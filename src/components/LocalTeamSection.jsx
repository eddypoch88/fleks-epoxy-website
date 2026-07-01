"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function LocalTeamSection() {
  const { t } = useLanguage();
  const cards = t("localTeam.cards");
  return (
    <section id="local-team" className="section-warm">
      <div className="wrap split-intro">
        <div className="sec-head reveal"><div className="eyebrow">{t("localTeam.eyebrow")}</div><h2>{t("localTeam.title")}</h2></div>
        <p className="section-lead reveal">{t("localTeam.intro")}</p>
      </div>
      <div className="wrap three-grid">
        {cards.map((card, index) => <article className="proof-card reveal" key={card.title}><span className="card-number">0{index + 1}</span><h3>{card.title}</h3><p>{card.text}</p></article>)}
      </div>
    </section>
  );
}
