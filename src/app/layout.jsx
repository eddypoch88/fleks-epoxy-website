import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
  metadataBase: new URL("https://fleksepoxy.com"),
  title: "Epoxy Flooring Kota Kinabalu & Sabah | FLEKS Epoxy",
  description: "Servis epoxy flooring di Kota Kinabalu dan Sabah untuk rumah, bilik air, garage, kedai dan ruang komersial. Lawatan tapak percuma dan sebut harga jelas.",
  keywords: ["epoxy flooring Kota Kinabalu", "epoxy flooring Sabah", "lantai epoxy Sabah", "epoxy flake flooring", "bathroom epoxy flooring Sabah"],
  alternates: { canonical: "/" },
  manifest: "/manifest.json",
  openGraph: { title: "Epoxy Flooring Kota Kinabalu & Sabah | FLEKS Epoxy", description: "Lawatan tapak percuma, cadangan sistem ikut keadaan lantai, dan sebut harga jelas sebelum kerja.", url: "/", siteName: "FLEKS Epoxy", locale: "ms_MY", type: "website", images: [{ url: "/processed/hero-epoxy-desktop.webp", width: 1400, height: 788, alt: "Idea kemasan epoxy flake untuk ruang di Sabah" }] },
  twitter: { card: "summary_large_image", title: "FLEKS Epoxy Kota Kinabalu & Sabah", description: "Servis epoxy flooring dengan lawatan tapak percuma dan sebut harga jelas.", images: ["/processed/hero-epoxy-desktop.webp"] },
  robots: { index: true, follow: true }
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#0b2523" };

export default function RootLayout({ children }) {
  return <html lang="ms" suppressHydrationWarning><body><LanguageProvider>{children}</LanguageProvider></body></html>;
}
