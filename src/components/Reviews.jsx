export default function Reviews() {
  return (
    <section id="reviews">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">Testimonials</div>
          <h2>Real talk from real customers.</h2>
          <p>Rated 4.9 ★ across 180+ Google reviews in Sabah.</p>
        </div>
        <div className="rev-grid">
          <div className="rev-card reveal delay-1">
            <div className="stars">★★★★★</div>
            <p className="rev-q">&quot;Our kitchen went from cracked tiles to a showpiece. Done in 2 days, zero mess.&quot;</p>
            <div className="rev-who"><div className="rev-av">SL</div><div><div className="rev-n">Sarah Lim</div><div className="rev-r">Homeowner, Kota Kinabalu</div></div></div>
          </div>
          <div className="rev-card reveal delay-2">
            <div className="stars">★★★★★</div>
            <p className="rev-q">&quot;They&apos;ve done 3 of our outlets now. Consistent, fast, and always professional.&quot;</p>
            <div className="rev-who"><div className="rev-av">FZ</div><div><div className="rev-n">Farid Zain</div><div className="rev-r">F&amp;B Operator, Penampang</div></div></div>
          </div>
          <div className="rev-card reveal delay-3">
            <div className="stars">★★★★★</div>
            <p className="rev-q">&quot;Warehouse floor survived 2 years of forklifts. Still glossy, not a single crack.&quot;</p>
            <div className="rev-who"><div className="rev-av">VT</div><div><div className="rev-n">Vincent Tan</div><div className="rev-r">Logistics Manager, Inanam</div></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
