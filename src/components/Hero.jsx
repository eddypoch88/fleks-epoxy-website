import Link from "next/link";

export default function Hero() {
  const WA_NUMBER = "60146211263";
  const waGeneral = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hi FLEKS! Saya nak tanya pasal epoxy flooring di Kota Kinabalu."
  )}`;

  return (
    <section className="hero">
      <div className="glow"></div>
      <div className="wrap hero-grid">
        <div className="reveal in">
          <div className="badge">
            <b>FREE VISIT</b> Kota Kinabalu &middot; No obligation
          </div>
          <h1>
            Floors that<br />look like <span className="accent">glass.</span>
          </h1>
          <p className="lead">
            Seamless, glossy, ultra-durable epoxy flooring for bathrooms, homes, showrooms &amp; factories across Kota Kinabalu &amp; Sabah. 2–3 day install. Guaranteed 5 years.
          </p>
          <div className="hero-btns">
            <Link className="btn btn-primary" href="#contact">
              Book free site visit &rarr;
            </Link>
            <a
              className="btn btn-wa"
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="18"
                height="18"
                style={{ marginRight: "6px", display: "inline-block", verticalAlign: "middle" }}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.522 5.854L.057 23.882l6.19-1.438A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.371l-.36-.213-3.676.853.88-3.574-.234-.369A9.818 9.818 0 1112 21.818z" />
              </svg>
              WhatsApp us
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hs-n">1,200+</div>
              <div className="hs-l">Floors completed</div>
            </div>
            <div>
              <div className="hs-n">4.9 ★</div>
              <div className="hs-l">Google rating</div>
            </div>
            <div>
              <div className="hs-n">12 yrs</div>
              <div className="hs-l">In the industry</div>
            </div>
          </div>
        </div>
        <div className="hero-media reveal in">
          <picture>
            <source media="(max-width: 760px)" srcSet="/processed/hero-epoxy-mobile.webp" type="image/webp" />
            <source media="(min-width: 761px)" srcSet="/processed/hero-epoxy-desktop.webp" type="image/webp" />
            <img
              className="hero-img"
              src="/processed/hero-epoxy-desktop.webp"
              alt="Stunning premium epoxy flakes floor in Kota Kinabalu by FLEKS"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width={1400}
              height={788}
            />
          </picture>
          <div className="float-card fc-top">
            <div className="fc-ico">
              <i className="ph-fill ph-trophy" style={{ color: "#ffb700" }}></i>
            </div>
            <div>
              <div className="fc-t">4.9 ★ Google</div>
              <div className="fc-s">180+ reviews</div>
            </div>
          </div>
          <div className="float-card fc-bot">
            <div className="fc-ico">
              <i className="ph-fill ph-sparkle" style={{ color: "var(--accent)" }}></i>
            </div>
            <div>
              <div className="fc-t">Installed in 2–3 days</div>
              <div className="fc-s">Kota Kinabalu &amp; Sabah</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
