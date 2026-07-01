"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function TrustBar() {
  const { t } = useLanguage();
  return <div className="trust-bar" aria-label="FLEKS service highlights"><div className="wrap trust-list">{t("trustBar").map((item) => <div key={item} className="trust-item"><span aria-hidden="true" />{item}</div>)}</div></div>;
}
