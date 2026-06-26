"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function BookingForm() {
  const { t } = useLanguage();
  
  // Provide a safe default using || or checking if t("booking.services") returns an array
  const rawServices = t("booking.services");
  const services = Array.isArray(rawServices) ? rawServices : ["Rumah", "Komersial", "Industri", "Garaj / Gudang"];
  
  const [service, setService] = useState(services[0] || "Rumah");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [sqft, setSqft] = useState(100);
  const [gpsStatus, setGpsStatus] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [btnGpsClass, setBtnGpsClass] = useState("btn-loc");

  const WA_NUMBER = "60146211263";

  const getPriceEst = (sq) => {
    let base = 25;
    // Map the selected service string back to logic if needed, but indices are safer
    // Or we just check index
    const sIndex = services.indexOf(service);
    if (sIndex === 1) base = 32;
    if (sIndex === 2) base = 20;
    if (sIndex === 3) base = 22;
    return `RM ${(sq * base).toLocaleString()}–${(sq * base * 1.25).toLocaleString()}`;
  };

  const getGps = () => {
    setGpsStatus(t("booking.gpsFinding"));
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude.toFixed(6);
          const lng = pos.coords.longitude.toFixed(6);
          setAddress(`https://waze.com/ul?ll=${lat},${lng}&navigate=yes`);
          setBtnGpsClass("btn-loc got");
          setGpsStatus(`✓ ${t("booking.gpsGot")}`);
        },
        () => setGpsStatus(t("booking.gpsFail"))
      );
    } else {
      setGpsStatus(t("booking.gpsNoSupport"));
    }
  };

  const submitBooking = () => {
    if (!name) return alert(t("booking.alertName"));
    if (!phone) return alert(t("booking.alertPhone"));
    
    let msg = `*NEW BOOKING FLEKS*\n\n`;
    msg += `👤 Nama: ${name}\n`;
    msg += `📞 No Tel: ${phone}\n`;
    msg += `📍 Lokasi: ${address || t("booking.waMsgLocUnfilled")}\n\n`;
    msg += `🛠 Jenis: ${service}\n`;
    msg += `📐 Saiz Lantai: ${sqft} sq ft\n`;
    msg += `💰 Anggaran Harga: ${getPriceEst(sqft)}\n`;
    
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    setIsSent(true);
  };

  return (
    <section id="contact" style={{ background: "var(--bg2)" }}>
      <div className="wrap">
        <div className="book-wrap reveal">
          <div className="book-left">
            <div className="eyebrow">{t("booking.eyebrow")}</div>
            <h2>{t("booking.title")}</h2>
            <p>{t("booking.subtitle")}</p>
            <div className="book-feats">
              <div className="book-feat"><span><i className="ph-light ph-map-pin"></i></span><div><b>{t("booking.f1T")}</b><br />{t("booking.f1S")}</div></div>
              <div className="book-feat"><span><i className="ph-light ph-clock"></i></span><div><b>{t("booking.f2T")}</b><br />{t("booking.f2S")}</div></div>
              <div className="book-feat"><span><i className="ph-light ph-currency-circle-dollar"></i></span><div><b>{t("booking.f3T")}</b><br />{t("booking.f3S")}</div></div>
              <div className="book-feat"><span><i className="ph-light ph-ruler"></i></span><div><b>{t("booking.f4T")}</b><br />{t("booking.f4S")}</div></div>
            </div>
          </div>
          <div className="book-card">
            {!isSent ? (
              <div id="bookForm">
                <div className="form-group">
                  <div className="form-label">{t("booking.serviceLabel")}</div>
                  <div className="chips">
                    {services.map(s => (
                      <div 
                        key={s} 
                        className={`chip ${service === s ? "active" : ""}`} 
                        onClick={() => setService(s)}
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="bName">{t("booking.nameLabel")}</label>
                  <input className="form-input" id="bName" type="text" placeholder={t("booking.namePh")} value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="bPhone">{t("booking.phoneLabel")}</label>
                  <input className="form-input" id="bPhone" type="tel" placeholder="+60 12-345 6789" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="form-group">
                  <div className="form-label" style={{ marginBottom: "6px" }}>{t("booking.locLabel")}</div>
                  <p style={{ fontSize: "12px", color: "var(--muted)", marginBottom: "12px", lineHeight: "1.5" }}>
                    {t("booking.locDesc")}
                  </p>
                  <button 
                    className={btnGpsClass} 
                    type="button" 
                    onClick={getGps}
                    style={{ width: "100%", padding: "12px", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}
                  >
                    📍 {address ? t("booking.gpsGot") : t("booking.gpsBtn")}
                  </button>
                  {gpsStatus && <div style={{ fontSize: "12px", color: address ? "var(--primary)" : "var(--muted)", marginTop: "8px", fontWeight: "500", textAlign: "center" }}>{gpsStatus}</div>}
                </div>
                <div className="form-group">
                  <div className="form-label">{t("booking.sizeLabel")}: <span>{sqft} sq ft</span></div>
                  <div className="size-row">
                    <button 
                      type="button" 
                      onClick={() => setSqft(Math.max(30, sqft - 1))}
                      style={{ width: "32px", height: "32px", borderRadius: "50%", border: "1px solid var(--line)", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: "600", cursor: "pointer", color: "var(--muted)" }}
                    >
                      -
                    </button>
                    <input type="range" min="30" max="1000" value={sqft} step="1" onChange={(e) => setSqft(Number(e.target.value))} />
                    <button 
                      type="button" 
                      onClick={() => setSqft(Math.min(1000, sqft + 1))}
                      style={{ width: "32px", height: "32px", borderRadius: "50%", border: "1px solid var(--line)", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: "600", cursor: "pointer", color: "var(--muted)" }}
                    >
                      +
                    </button>
                    <div className="size-val accent">{sqft} sq ft</div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--muted2)", marginTop: "4px" }}>
                    <span>{t("booking.sizeS1")}</span><span>{t("booking.sizeS2")}</span>
                  </div>
                </div>
                <div className="price-est">
                  <div>
                    <div className="pe-label">{t("booking.priceLabel")}</div>
                    <div style={{ fontSize: "12px", color: "var(--muted2)", marginTop: "2px" }}>{t("booking.priceDesc")}</div>
                  </div>
                  <div className="pe-range">{getPriceEst(sqft)}</div>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <button className="btn-submit" onClick={submitBooking}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ marginRight: "8px", display: "inline-block", verticalAlign: "middle" }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.522 5.854L.057 23.882l6.19-1.438A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.371l-.36-.213-3.676.853.88-3.574-.234-.369A9.818 9.818 0 1112 21.818z" />
                    </svg> {t("booking.btnSubmit")}
                  </button>
                  <p style={{ textAlign: "center", fontSize: "12px", color: "var(--muted2)", marginTop: "10px" }}>
                    {t("booking.submitDesc")}
                  </p>
                </div>
              </div>
            ) : (
              <div className="book-sent" style={{ display: "block" }}>
                <div className="tick">✅</div>
                <h3>{t("booking.sentTitle")}</h3>
                <p>{t("booking.sentDesc")}</p>
                <button className="btn-submit" style={{ marginTop: "20px", maxWidth: "240px", marginLeft: "auto", marginRight: "auto" }} onClick={() => setIsSent(false)}>
                  {t("booking.btnNew")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
