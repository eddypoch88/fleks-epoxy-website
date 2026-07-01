"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { trackWA } from "@/utils/trackWA";
import LanguageSwitcher from "./LanguageSwitcher";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();
  const home = pathname === "/" ? "" : "/";
  const waGeneral = `https://wa.me/60146211263?text=${encodeURIComponent(t("header.waMsg"))}`;
  const nav = [["process", "process"], ["gallery", "gallery"], ["pricing", "pricing"], ["faq", "faq"], ["areas", "services"]];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="wrap nav">
        <Link href="/" className="logo" aria-label="FLEKS Epoxy home">FLEKS <span className="dot" /></Link>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
          {nav.map(([key, id]) => <Link key={key} href={`${home}#${id}`} onClick={() => setMenuOpen(false)}>{t(`header.${key}`)}</Link>)}
        </nav>
        <div className="nav-cta">
          <LanguageSwitcher />
          <a className="btn btn-wa nav-wa" href={waGeneral} target="_blank" rel="noopener noreferrer" onClick={trackWA}><WhatsAppIcon /> <span>{t("header.wa")}</span></a>
          <Link className="btn btn-primary nav-book" href={`${home}#contact`}>{t("header.btnBook")}</Link>
          <button className={`hamb ${menuOpen ? "open" : ""}`} aria-label="Toggle navigation menu" aria-expanded={menuOpen} type="button" onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button>
        </div>
      </div>
    </header>
  );
}
