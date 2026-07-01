import LocalServicePage from "./LocalServicePage";
import LocalBusinessSchema from "./seo/LocalBusinessSchema";
import ServiceSchema from "./seo/ServiceSchema";
import FAQSchema from "./seo/FAQSchema";
import BreadcrumbSchema from "./seo/BreadcrumbSchema";
import { seoPages } from "@/lib/seo-pages";

export default function ServicePageRoute({ pageKey }) {
  const page = seoPages[pageKey];
  const content = page.content.ms;
  const url = `https://fleksepoxy.com/${page.slug}`;
  return <><LocalBusinessSchema /><ServiceSchema name={content.h1} description={page.metaDescription} url={url} area={page.area} /><FAQSchema items={content.faq} /><BreadcrumbSchema current={content.h1} url={url} /><LocalServicePage page={page} /></>;
}
