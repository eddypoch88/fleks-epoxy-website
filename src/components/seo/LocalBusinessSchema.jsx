import JsonLd from "./JsonLd";

export default function LocalBusinessSchema() {
  return <JsonLd data={{
    "@context": "https://schema.org", "@type": "HomeAndConstructionBusiness",
    "@id": "https://fleksepoxy.com/#business", name: "FLEKS Epoxy",
    url: "https://fleksepoxy.com/", telephone: "+60146211263",
    image: "https://fleksepoxy.com/processed/hero-epoxy-desktop.webp",
    priceRange: "RM28–RM32 per sqft",
    description: "Epoxy flooring service for homes, bathrooms, garages, shops and commercial spaces in Kota Kinabalu and nearby Sabah.",
    areaServed: ["Kota Kinabalu", "Penampang", "Inanam", "Putatan", "Likas", "Sabah"].map((name) => ({ "@type": "Place", name })),
    knowsAbout: ["Epoxy flooring", "Epoxy flake flooring", "Bathroom epoxy flooring", "Commercial epoxy flooring", "Anti-slip topcoat", "Floor surface preparation"]
  }} />;
}
