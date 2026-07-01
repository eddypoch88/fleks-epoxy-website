import ServicePageRoute from "@/components/ServicePageRoute";
import { seoPages, pageMetadata } from "@/lib/seo-pages";
const key = "epoxy-flooring-price-sabah";
export const metadata = pageMetadata(seoPages[key]);
export default function Page(){return <ServicePageRoute pageKey={key} />;}
