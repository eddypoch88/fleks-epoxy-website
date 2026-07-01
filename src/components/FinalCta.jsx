"use client";
import { useLanguage } from "@/context/LanguageContext";
import { trackWA } from "@/utils/trackWA";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function FinalCta() {
  const { t } = useLanguage();
  const url = `https://wa.me/60146211263?text=${encodeURIComponent(t("header.waMsg"))}`;
  return <section className="final-cta"><div className="wrap final-cta-inner"><div><span>FLEKS EPOXY · SABAH</span><h2>{t("booking.title")}</h2></div><a className="btn btn-wa" href={url} target="_blank" rel="noopener noreferrer" onClick={trackWA}><WhatsAppIcon /> {t("header.wa")}</a></div></section>;
}
