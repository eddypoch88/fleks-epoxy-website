"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function ThankYouPage() {
  const { t } = useLanguage();
  return <main className="thanks-page"><div className="thanks-card"><Link href="/" className="logo thanks-logo">FLEKS <span className="dot" /></Link><div className="eyebrow">{t("thanks.eyebrow")}</div><h1>{t("thanks.title")}</h1><p>{t("thanks.body")}</p><ol>{t("thanks.steps").map((step,index) => <li key={step}><span>0{index+1}</span>{step}</li>)}</ol><div className="thanks-actions"><a className="btn btn-wa" href="https://wa.me/60146211263" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> {t("thanks.wa")}</a><Link className="thanks-back" href="/">← {t("thanks.back")}</Link></div></div></main>;
}
