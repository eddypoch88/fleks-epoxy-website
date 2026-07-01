import JsonLd from "./JsonLd";

export default function FAQSchema({ items }) {
  return <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }} />;
}
