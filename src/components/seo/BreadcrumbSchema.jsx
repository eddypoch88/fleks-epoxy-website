import JsonLd from "./JsonLd";

export default function BreadcrumbSchema({ current, url }) {
  return <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "FLEKS Epoxy", item: "https://fleksepoxy.com/" },
    { "@type": "ListItem", position: 2, name: current, item: url }
  ] }} />;
}
