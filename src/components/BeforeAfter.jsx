"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function BeforeAfter() {
  const { t } = useLanguage();
  const [sliderPos, setSliderPos] = useState(58);
  const wrapRef = useRef(null);
  const isDragging = useRef(false);

  const moveSlider = (clientX) => {
    if (!wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    let x = clientX - rect.left;
    let pct = (x / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    setSliderPos(pct);
  };

  useEffect(() => {
    const handleMove = (e) => {
      if (!isDragging.current) return;
      if (e.touches && e.touches.length > 0) {
        moveSlider(e.touches[0].clientX);
      } else {
        moveSlider(e.clientX);
      }
    };
    const handleUp = () => {
      isDragging.current = false;
    };
    
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: false });
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);
    
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, []);

  return (
    <section id="transform" style={{ background: "var(--bg2)" }}>
      <div className="wrap">
        <div className="sec-head reveal" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
          <div className="eyebrow">{t("ba.eyebrow")}</div>
          <h2>{t("ba.title")}</h2>
          <p>{t("ba.subtitle")}</p>
        </div>
        <div 
          className="ba-wrap reveal" 
          ref={wrapRef}
          onMouseDown={() => { isDragging.current = true; }}
          onTouchStart={() => { isDragging.current = true; }}
          role="slider"
          tabIndex="0"
          aria-valuenow={Math.round(sliderPos)}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Before and after comparison slider"
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setSliderPos(Math.max(0, sliderPos - 5));
            if (e.key === "ArrowRight") setSliderPos(Math.min(100, sliderPos + 5));
          }}
        >
          <img 
            className="ba-img" 
            src="/processed/bathroom-1-after.webp" 
            alt={t("ba.afterAlt") || "Seamless glossy epoxy bathroom floor after FLEKS installation"} 
          />
          <img 
            className="ba-img ba-top" 
            src="/processed/bathroom-1-before.webp" 
            alt={t("ba.beforeAlt") || "Old stained bathroom tiles before epoxy coating"}
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          />
          <span className="ba-tag ba-before">{t("ba.before")}</span>
          <span className="ba-tag ba-after">{t("ba.after")}</span>
          <div className="ba-handle" style={{ left: `${sliderPos}%` }}>
            <div className="ba-knob pulse-anim" style={{ display: "flex", flexDirection: "column", gap: "2px", height: "auto", padding: "10px", borderRadius: "24px" }}>
              <span style={{ fontSize: "16px", lineHeight: "1" }}>⇔</span>
              <span style={{ fontSize: "9px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px" }}>{t("ba.drag")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
