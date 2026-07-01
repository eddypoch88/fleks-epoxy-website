"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { serviceLinks } from "@/lib/service-links";
import { trackWA } from "@/utils/trackWA";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function Footer() {
  const { locale, t } = useLanguage();
  return (
    <footer><div className="wrap foot-grid">
      <div><Link href="/" className="logo footer-logo">FLEKS <span className="dot" /></Link><p>{t("footer.desc")}</p><strong>{t("footer.honesty")}</strong></div>
      <div className="foot-col"><h3>{t("footer.quickLinks")}</h3><Link href="/#process">{t("header.process")}</Link><Link href="/#gallery">{t("header.gallery")}</Link><Link href="/#pricing">{t("header.pricing")}</Link><Link href="/#faq">{t("header.faq")}</Link></div>
      <div className="foot-col"><h3>{t("footer.services")}</h3>{serviceLinks.slice(0, 5).map((item) => <Link key={item.href} href={item.href}>{item.labels[locale]}</Link>)}</div>
      <div className="foot-col"><h3>{t("footer.contact")}</h3><a href={`https://wa.me/60146211263?text=${encodeURIComponent(t("header.waMsg"))}`} target="_blank" rel="noopener noreferrer" onClick={trackWA}><WhatsAppIcon /> WhatsApp</a><a href="mailto:business@fleksepoxy.com">business@fleksepoxy.com</a><span>Kota Kinabalu, Sabah</span></div>
    </div><div className="wrap foot-bot"><span>© 2026 FLEKS Epoxy. {t("footer.rights")}</span><span>fleksepoxy.com</span></div></footer>
  );
}
