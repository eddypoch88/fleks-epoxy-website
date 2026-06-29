import { Manrope } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://fleksepoxy.com"),
  title: "FLEKS Epoxy Flooring Kota Kinabalu | Lantai Epoxy Sabah",
  description: "FLEKS — premium epoxy flooring & lantai epoxy in Kota Kinabalu, Sabah. Seamless, glossy, anti-slip floors for bathrooms, homes, offices & factories. 2–3 day install, up to 2-year warranty. Free site visit. WhatsApp us today.",
  keywords: "epoxy flooring Kota Kinabalu, lantai epoxy Sabah, epoxy lantai KK, epoxy flooring Sabah, terrazzo epoxy, flake flooring, bathroom epoxy, lantai tandas epoxy, epoxy floor coating Malaysia",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FLEKS Epoxy Flooring — Kota Kinabalu & Sabah",
    description: "Seamless, glossy, ultra-durable epoxy floors. 2–3 day install, up to 2-year warranty. Free site visit across Kota Kinabalu & Sabah.",
    url: "https://fleksepoxy.com/",
    siteName: "FLEKS Epoxy",
    images: [
      {
        url: "https://fleksepoxy.com/processed/hero-epoxy-desktop.webp",
        width: 1400,
        height: 788,
        alt: "FLEKS Epoxy Flooring",
      },
    ],
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FLEKS Epoxy Flooring — Kota Kinabalu & Sabah",
    description: "Seamless, glossy, ultra-durable epoxy floors. 2–3 day install, up to 2-year warranty.",
    images: ["https://fleksepoxy.com/processed/hero-epoxy-desktop.webp"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ overflowX: "hidden" }}>
      <head>
        <Script src="https://unpkg.com/@phosphor-icons/web" strategy="beforeInteractive" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "FLEKS Epoxy Flooring Kota Kinabalu | Lantai Epoxy Sabah",
              "image": "https://fleksepoxy.com/processed/hero-epoxy-desktop.webp",
              "@id": "https://fleksepoxy.com/",
              "url": "https://fleksepoxy.com/",
              "telephone": "+60198822916",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kota Kinabalu",
                "addressRegion": "Sabah",
                "addressCountry": "MY"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 5.9804,
                "longitude": 116.0735
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </head>
      <body className={manrope.className} style={{ overflowX: "hidden", position: "relative" }}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
