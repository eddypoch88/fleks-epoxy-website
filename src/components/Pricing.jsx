export default function Pricing() {
  return (
    <section id="pricing" style={{ background: "var(--bg2)" }}>
      <div className="wrap">
        <div className="sec-head reveal" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
          <div className="eyebrow">Transparent pricing</div>
          <h2>Simple. No surprises.</h2>
          <p>Honest per-square-foot rates. Final quote after a free site visit — no hidden charges.</p>
        </div>
        <div className="price-grid">
          <div className="plan reveal delay-1">
            <h3>Residential</h3>
            <div className="blurb">For homes, condos &amp; apartments</div>
            <div className="price">RM 25 <span>/sq ft</span></div>
            <ul><li>1–2 day install</li><li>Seamless &amp; easy to clean</li><li>5-year warranty</li><li>10 colour options</li><li>Free design consult</li></ul>
            <a className="btn btn-ghost" href="#contact">Book free site visit</a>
          </div>
          <div className="plan popular reveal delay-2">
            <div className="pop-tag">MOST POPULAR</div>
            <h3>Commercial</h3>
            <div className="blurb">For offices, showrooms &amp; retail</div>
            <div className="price">RM 32 <span>/sq ft</span></div>
            <ul><li>Priority scheduling</li><li>Anti-slip addons available</li><li>7-year warranty</li><li>Custom logo inlay option</li><li>Free 3D mockup included</li></ul>
            <a className="btn btn-primary" href="#contact">Book free site visit</a>
          </div>
          <div className="plan reveal delay-3">
            <h3>Industrial</h3>
            <div className="blurb">For factories, warehouses &amp; carparks</div>
            <div className="price">RM 20 <span>/sq ft</span></div>
            <ul><li>Chemical-resistant coat</li><li>UV-stable top coat</li><li>5-year warranty</li><li>Bulk project discount</li><li>Heavy load rated</li></ul>
            <a className="btn btn-ghost" href="#contact">Book free site visit</a>
          </div>
        </div>
        <p className="price-note">Final quote after free site visit. No hidden charges. Covers all of Kota Kinabalu &amp; Sabah.</p>
      </div>
    </section>
  );
}
