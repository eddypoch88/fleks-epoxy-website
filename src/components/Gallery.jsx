"use client";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const fallbackItems = [
  { src: "/processed/gallery-1.webp",      alt: "White flake epoxy bathroom floor Kota Kinabalu" },
  { src: "/processed/teal_epoxy_floor.png", alt: "Stunning premium teal and white metallic epoxy floor" },
  { src: "/processed/gallery-3.webp",      alt: "Brown flake epoxy toilet floor seamless finish" },
  { src: "/processed/gallery-2.webp",      alt: "Grey flake epoxy floor coating over tiles" },
  { src: "/processed/gallery-6.webp",      alt: "Glossy silver epoxy tiled floor finish" },
  { src: "/processed/gallery-5.webp",      alt: "Solid grey anti-slip epoxy bathroom floor" },
];

export default function Gallery() {
  const { t } = useLanguage();
  const tItems = t("gallery.items") || [];
  const items = fallbackItems.map((item, idx) => ({
    ...item,
    cap: tItems[idx] ? tItems[idx].cap : "Gallery Image"
  }));

  const [lightbox, setLightbox]     = useState(null);
  const [activeIdx, setActiveIdx]   = useState(0);
  const gridRef                     = useRef(null);
  const itemRefs                    = useRef([]);

  // ── Intersection Observer: detect which card is most centred ──
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the entry with the highest intersectionRatio
        let best = null;
        entries.forEach((entry) => {
          if (!best || entry.intersectionRatio > best.intersectionRatio) best = entry;
        });
        if (best && best.intersectionRatio > 0) {
          const idx = Number(best.target.dataset.idx);
          setActiveIdx(idx);
        }
      },
      {
        root: grid,
        threshold: Array.from({ length: 21 }, (_, i) => i / 20), // 0, 0.05, 0.10 … 1
      }
    );

    itemRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [items]);

  // ── ESC to close lightbox ──
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ── Lock body scroll when lightbox open ──
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const prev = () => setLightbox((i) => (i - 1 + items.length) % items.length);
  const next = () => setLightbox((i) => (i + 1) % items.length);

  return (
    <>
      <section id="gallery">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">{t("gallery.eyebrow")}</div>
            <h2>{t("gallery.title")}</h2>
            <p>
              {t("gallery.subtitle")}{" "}
              <span style={{ fontSize: "13px", color: "var(--muted2)" }}>{t("gallery.tapHint")}</span>
            </p>
          </div>

          {/* ── CAROUSEL ── */}
          <div className="gal-grid" ref={gridRef}>
            {items.map((item, i) => {
              const isActive = i === activeIdx;
              return (
                <div
                  key={i}
                  ref={(el) => (itemRefs.current[i] = el)}
                  data-idx={i}
                  className="gal-item reveal"
                  onClick={() => setLightbox(i)}
                  style={{
                    cursor: "zoom-in",
                    transition: "transform .4s cubic-bezier(.16,1,.3,1), box-shadow .4s, filter .4s, opacity .4s",
                    transform: isActive ? "scale(1.06) translateY(-6px)" : "scale(0.93) translateY(0px)",
                    boxShadow: isActive
                      ? "0 24px 60px rgba(0,179,164,.22), 0 8px 24px rgba(13,30,45,.18)"
                      : "0 4px 16px rgba(13,30,45,.08)",
                    filter: isActive ? "brightness(1.04)" : "brightness(0.62)",
                    opacity: isActive ? 1 : 0.8,
                  }}
                >
                  {/* "Tap to view" hint on active card */}
                  {isActive && (
                    <div className="gal-tap-hint">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                      </svg>
                      {t("gallery.tapToView")}
                    </div>
                  )}
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <div className="gal-cap" style={{ opacity: isActive ? 1 : 0, transition: "opacity .4s" }}>
                    {item.cap}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll hint dots */}
          <div className="gal-scroll-dots">
            {items.map((_, i) => (
              <span key={i} className={`gal-sdot${i === activeIdx ? " active" : ""}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && (
        <div className="lb-overlay" onClick={() => setLightbox(null)}>
          <button className="lb-close" onClick={() => setLightbox(null)} aria-label={t("gallery.close")}>✕</button>
          <div className="lb-caption">{items[lightbox].cap}</div>
          <div className="lb-img-wrap" onClick={(e) => e.stopPropagation()}>
            <img src={items[lightbox].src} alt={items[lightbox].alt} className="lb-img" />
          </div>
          <button className="lb-arrow lb-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label={t("gallery.prev")}>‹</button>
          <button className="lb-arrow lb-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label={t("gallery.next")}>›</button>
          <div className="lb-dots" onClick={(e) => e.stopPropagation()}>
            {items.map((_, i) => (
              <span key={i} className={`lb-dot${i === lightbox ? " active" : ""}`} onClick={() => setLightbox(i)} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
