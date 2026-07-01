"use client";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const labels = { ms: "BM", en: "EN", zh: "中文" };

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (event) => ref.current && !ref.current.contains(event.target) && setOpen(false);
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="lang-dropdown" ref={ref}>
      <button className="lang-trigger" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-haspopup="menu" aria-label="Choose language">
        <span>{labels[locale]}</span>
        <svg viewBox="0 0 12 8" width="10" height="7" aria-hidden="true"><path d="m1 1 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.7" /></svg>
      </button>
      {open && (
        <div className="lang-menu" role="menu">
          {Object.entries(labels).map(([key, label]) => (
            <button key={key} className={locale === key ? "active" : ""} type="button" role="menuitem" onClick={() => { setLocale(key); setOpen(false); }}>
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
