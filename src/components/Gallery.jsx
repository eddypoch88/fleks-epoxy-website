export default function Gallery() {
  return (
    <section id="gallery">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">Our work</div>
          <h2>Real floors. Real homes in Sabah.</h2>
          <p>A few recent epoxy projects around Kota Kinabalu &amp; Penampang.</p>
        </div>
        <div className="gal-grid">
          <div className="gal-item reveal"><img src="/processed/gallery-1.webp" alt="White flake epoxy bathroom floor Kota Kinabalu" loading="lazy" /><div className="gal-cap">White flake — bathroom</div></div>
          <div className="gal-item reveal"><img src="/processed/teal_epoxy_floor.png" alt="Stunning premium teal and white metallic epoxy floor" loading="lazy" /><div className="gal-cap">Teal metallic — luxury finish</div></div>
          <div className="gal-item reveal"><img src="/processed/gallery-3.webp" alt="Brown flake epoxy toilet floor seamless finish" loading="lazy" /><div className="gal-cap">Coffee flake — toilet</div></div>
          <div className="gal-item reveal"><img src="/processed/gallery-2.webp" alt="Grey flake epoxy floor coating over tiles" loading="lazy" /><div className="gal-cap">Silver flake — wet area</div></div>
          <div className="gal-item reveal"><img src="/processed/gallery-6.webp" alt="Glossy silver epoxy tiled floor finish" loading="lazy" /><div className="gal-cap">Pearl grey — gloss coat</div></div>
          <div className="gal-item reveal"><img src="/processed/gallery-5.webp" alt="Solid grey anti-slip epoxy bathroom floor" loading="lazy" /><div className="gal-cap">Solid grey — anti-slip</div></div>
        </div>
      </div>
    </section>
  );
}
