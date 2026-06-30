"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { trackWA } from "@/utils/trackWA";

export default function Footer() {
  const { t } = useLanguage();
  const WA_NUMBER = "60146211263";
  const waGeneral = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t("header.waMsg"))}`;

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <a href="#" className="logo">FLEKS <span className="dot"></span></a>
            <p>{t("footer.desc")}</p>
          </div>
          <div className="foot-col">
            <h3>{t("footer.quickLinks")}</h3>
            <a href="#why">{t("header.why")}</a>
            <a href="#gallery">{t("header.gallery")}</a>
            <a href="#pricing">{t("header.pricing")}</a>
            <a href="#faq">{t("header.faq")}</a>
            <a href="#contact">{t("header.btnBook")}</a>
          </div>
          <div className="foot-col">
            <h3>{t("footer.contact")}</h3>
            <a 
              href={waGeneral}
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-wa"
              onClick={trackWA}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ marginRight: "6px", display: "inline-block", verticalAlign: "middle" }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.522 5.854L.057 23.882l6.19-1.438A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.371l-.36-.213-3.676.853.88-3.574-.234-.369A9.818 9.818 0 1112 21.818z" />
              </svg>WhatsApp
            </a>
            <a href="mailto:business@fleksepoxy.com">✉ business@fleksepoxy.com</a>
            <a href="https://www.google.com/search?q=Fleks+EpoxyFloring&stick=H4sIAAAAAAAAAONgU1I1qDBLNEhLtjQzTbZMNE4yNDO2MqgwTTQ2N7BIMbdMNTBKMbUwWsQq5JaTml2s4FqQX1HplpNflJmXDgAhMhoLPgAAAA" target="_blank" rel="noopener noreferrer">📍 Kota Kinabalu, Sabah</a>
            <a href="https://g.page/r/CYLVAp7XCDdaEBM/review" target="_blank" rel="noopener noreferrer">⭐ {t("footer.writeReview")}</a>
            <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
              <a
                href="https://www.facebook.com/fleksepoxyflooring"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "38px", height: "38px", borderRadius: "8px", background: "var(--bg2)", color: "var(--muted)", transition: ".2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#1877F2"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--bg2)"; e.currentTarget.style.color = "var(--muted)"; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@Fleksepoxy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "38px", height: "38px", borderRadius: "8px", background: "var(--bg2)", color: "var(--muted)", transition: ".2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#FF0000"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--bg2)"; e.currentTarget.style.color = "var(--muted)"; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="foot-bot">
          <div>© 2026 FLEKS Epoxy. {t("footer.rights")}</div>
          <div>{t("footer.licensed")}</div>
        </div>
      </div>
    </footer>
  );
}
