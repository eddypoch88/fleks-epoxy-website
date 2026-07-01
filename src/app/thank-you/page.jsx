"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function ThankYouPage() {
  useEffect(() => {
    // Fire GA4 conversion event
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "form_submission_success", {
        event_category: "Lead",
        event_label: "Booking Form Submitted",
        value: 1,
      });
    }
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a1628 0%, #0d2040 50%, #0a1628 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "520px",
          width: "100%",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "24px",
          padding: "60px 40px",
          backdropFilter: "blur(20px)",
          boxShadow: "0 32px 64px rgba(0,0,0,0.4)",
        }}
      >
        {/* Animated checkmark */}
        <div
          style={{
            width: "88px",
            height: "88px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #00b3a4, #00d4c0)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 28px",
            fontSize: "40px",
            boxShadow: "0 0 40px rgba(0,179,164,0.4)",
            animation: "pulse 2s infinite",
          }}
        >
          ✓
        </div>

        <h1
          style={{
            color: "#ffffff",
            fontSize: "clamp(24px, 5vw, 32px)",
            fontWeight: "700",
            marginBottom: "16px",
            lineHeight: "1.2",
          }}
        >
          Terima kasih! 🎉
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "16px",
            lineHeight: "1.7",
            marginBottom: "12px",
          }}
        >
          Borang lantai epoxy awak sudah kami terima melalui WhatsApp.
        </p>

        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "14px",
            lineHeight: "1.6",
            marginBottom: "36px",
          }}
        >
          Tim kami akan menghubungi awak dalam masa <strong style={{ color: "#00d4c0" }}>24 jam</strong> untuk sahkan tarikh lawatan percuma.
        </p>

        {/* What happens next */}
        <div
          style={{
            background: "rgba(0,179,164,0.08)",
            border: "1px solid rgba(0,179,164,0.2)",
            borderRadius: "14px",
            padding: "20px 24px",
            marginBottom: "32px",
            textAlign: "left",
          }}
        >
          <div style={{ color: "#00d4c0", fontWeight: "600", fontSize: "13px", marginBottom: "12px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Apa seterusnya?
          </div>
          {[
            { icon: "📞", text: "Tim FLEKS hubungi awak untuk sahkan tarikh" },
            { icon: "🏠", text: "Kami datang ke rumah awak untuk ukur & bagi nasihat" },
            { icon: "💰", text: "Dapat harga tepat — tiada hidden charges" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: i < 2 ? "10px" : "0" }}>
              <span style={{ fontSize: "18px", flexShrink: 0, marginTop: "1px" }}>{item.icon}</span>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: "1.5" }}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <a
            href="https://wa.me/60146211263"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              background: "linear-gradient(135deg, #25D366, #128C7E)",
              color: "#fff",
              textDecoration: "none",
              padding: "14px 28px",
              borderRadius: "12px",
              fontWeight: "600",
              fontSize: "15px",
              boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(37,211,102,0.45)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.3)"; }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.522 5.854L.057 23.882l6.19-1.438A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.371l-.36-.213-3.676.853.88-3.574-.234-.369A9.818 9.818 0 1112 21.818z" />
            </svg>
            WhatsApp kami sekarang
          </a>

          <Link
            href="/"
            style={{
              display: "block",
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              padding: "12px 28px",
              borderRadius: "12px",
              fontWeight: "500",
              fontSize: "14px",
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
          >
            ← Kembali ke laman utama
          </Link>
        </div>

        {/* Branding */}
        <div style={{ marginTop: "32px", color: "rgba(255,255,255,0.25)", fontSize: "13px" }}>
          FLEKS Epoxy Flooring · Kota Kinabalu, Sabah
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 40px rgba(0,179,164,0.4); }
          50% { box-shadow: 0 0 60px rgba(0,179,164,0.7); }
        }
      `}</style>
    </main>
  );
}
