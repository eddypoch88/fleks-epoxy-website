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
            <h4>{t("footer.quickLinks")}</h4>
            <a href="#why">{t("header.why")}</a>
            <a href="#gallery">{t("header.gallery")}</a>
            <a href="#pricing">{t("header.pricing")}</a>
            <a href="#faq">{t("header.faq")}</a>
            <a href="#contact">{t("header.btnBook")}</a>
          </div>
          <div className="foot-col">
            <h4>{t("footer.contact")}</h4>
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
