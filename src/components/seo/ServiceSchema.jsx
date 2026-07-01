import JsonLd from "./JsonLd";

export default function ServiceSchema({ name, description, url, area = "Sabah" }) {
  return <JsonLd data={{
    "@context": "https://schema.org", "@type": "Service", name, description, url,
    serviceType: "Epoxy flooring", areaServed: { "@type": "Place", name: area },
    provider: { "@id": "https://fleksepoxy.com/#business" },
    offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", minPrice: 28, maxPrice: 32, priceCurrency: "MYR", unitText: "SQFT" } }
  }} />;
}
