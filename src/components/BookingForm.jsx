"use client";
import { useState } from "react";

export default function BookingForm() {
  const [service, setService] = useState("Rumah");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [sqft, setSqft] = useState(100);
  const [gpsStatus, setGpsStatus] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [btnGpsClass, setBtnGpsClass] = useState("btn-loc");

  const WA_NUMBER = "60146211263";

  const services = ["Rumah", "Komersial", "Industri", "Garaj / Gudang"];

  const getPriceEst = (sq) => {
    let base = 25;
    if (service === "Komersial") base = 32;
    if (service === "Industri") base = 20;
    if (service === "Garaj / Gudang") base = 22;
    return `RM ${(sq * base).toLocaleString()}–${(sq * base * 1.25).toLocaleString()}`;
  };

  const getGps = () => {
    setGpsStatus("Mencari lokasi...");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude.toFixed(6);
          const lng = pos.coords.longitude.toFixed(6);
          setAddress(`https://www.google.com/maps?q=${lat},${lng}`);
          setBtnGpsClass("btn-loc got");
          setGpsStatus("✓ Lokasi Google Maps ditemui");
        },
        () => setGpsStatus("❌ Gagal dapatkan lokasi")
      );
    } else {
      setGpsStatus("❌ GPS tidak disokong");
    }
  };

  const submitBooking = () => {
    if (!name) return alert("Sila masukkan nama");
    if (!phone) return alert("Sila masukkan no telefon");
    
    let msg = `*NEW BOOKING FLEKS*\n\n`;
    msg += `👤 Nama: ${name}\n`;
    msg += `📞 No Tel: ${phone}\n`;
    msg += `📍 Lokasi: ${address || "Belum diisi"}\n\n`;
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
            <div className="eyebrow">Lawatan tapak percuma</div>
            <h2>Jom tengok ruang awak.</h2>
            <p>Isi borang, share lokasi rumah — kami datang ukur, bagi nasihat &amp; sebut harga tepat. Percuma, tiada tekanan.</p>
            <div className="book-feats">
              <div className="book-feat"><span><i className="ph-light ph-map-pin"></i></span><div><b>Kami datang ke tempat awak</b><br />Seluruh Kota Kinabalu &amp; Sabah</div></div>
              <div className="book-feat"><span><i className="ph-light ph-clock"></i></span><div><b>30–45 minit</b><br />Mengikut waktu awak</div></div>
              <div className="book-feat"><span><i className="ph-light ph-currency-circle-dollar"></i></span><div><b>100% percuma</b><br />Tiada obligasi langsung</div></div>
              <div className="book-feat"><span><i className="ph-light ph-ruler"></i></span><div><b>Ukuran &amp; harga tepat</b><br />Kami kira on-site — tiada hidden charges</div></div>
            </div>
          </div>
          <div className="book-card">
            {!isSent ? (
              <div id="bookForm">
                <div className="form-group">
                  <div className="form-label">Jenis servis</div>
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
                  <label className="form-label" htmlFor="bName">Nama anda</label>
                  <input className="form-input" id="bName" type="text" placeholder="e.g. Ahmad / Sarah" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="bPhone">Telefon / WhatsApp</label>
                  <input className="form-input" id="bPhone" type="tel" placeholder="+60 12-345 6789" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="form-group">
                  <div className="form-label">Lokasi awak</div>
                  <div className="loc-row">
                    <input className="form-input" id="bAddr" type="text" placeholder="Alamat atau kawasan (cth: Likas, KK)" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <button className={btnGpsClass} type="button" onClick={getGps}>📍 GPS</button>
                  </div>
                  {gpsStatus && <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "6px" }}>{gpsStatus}</div>}
                </div>
                <div className="form-group">
                  <div className="form-label">Anggaran saiz lantai: <span>{sqft} sq ft</span></div>
                  <div className="size-row">
                    <input type="range" min="30" max="1000" value={sqft} step="1" onChange={(e) => setSqft(Number(e.target.value))} />
                    <div className="size-val accent">{sqft} sq ft</div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--muted2)", marginTop: "4px" }}>
                    <span>Bilik mandi kecil</span><span>Rumah besar / Kilang</span>
                  </div>
                </div>
                <div className="price-est">
                  <div>
                    <div className="pe-label">Anggaran harga</div>
                    <div style={{ fontSize: "12px", color: "var(--muted2)", marginTop: "2px" }}>Harga tepat selepas lawatan percuma</div>
                  </div>
                  <div className="pe-range">{getPriceEst(sqft)}</div>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <button className="btn-submit" onClick={submitBooking}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ marginRight: "8px", display: "inline-block", verticalAlign: "middle" }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.522 5.854L.057 23.882l6.19-1.438A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.371l-.36-.213-3.676.853.88-3.574-.234-.369A9.818 9.818 0 1112 21.818z" />
                    </svg> Hantar ke WhatsApp kami
                  </button>
                  <p style={{ textAlign: "center", fontSize: "12px", color: "var(--muted2)", marginTop: "10px" }}>
                    Mesej WhatsApp akan terbuka — dengan nama, no, lokasi &amp; anggaran harga awak
                  </p>
                </div>
              </div>
            ) : (
              <div className="book-sent" style={{ display: "block" }}>
                <div className="tick">✅</div>
                <h3>WhatsApp terbuka!</h3>
                <p>Hantar mesej tu — kami akan confirm lawatan dalam masa beberapa jam.</p>
                <button className="btn-submit" style={{ marginTop: "20px", maxWidth: "240px", marginLeft: "auto", marginRight: "auto" }} onClick={() => setIsSent(false)}>
                  Borang baru
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
