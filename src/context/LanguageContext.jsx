"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState("ms"); // default to malay

  // Load saved preference
  useEffect(() => {
    const saved = localStorage.getItem("fleks-lang");
    if (saved && ["en", "ms", "zh"].includes(saved)) {
      setLocale(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : locale;
  }, [locale]);

  const handleSetLocale = (lang) => {
    setLocale(lang);
    localStorage.setItem("fleks-lang", lang);
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[locale];
    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
