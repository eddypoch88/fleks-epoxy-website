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
  manifest: "/manifest.json",
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

const GA_TRACKING_ID = "G-BL9ZBRE13E"; // Ganti dengan ID Google Analytics anda
const FB_PIXEL_ID = "123456789012345"; // Ganti dengan ID FB Pixel anda

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ overflowX: "hidden" }}>
      <head>
        <Script src="https://unpkg.com/@phosphor-icons/web" strategy="lazyOnload" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="FLEKS Epoxy" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(reg) {
                    console.log('SW registered:', reg.scope);
                  }).catch(function(err) {
                    console.error('SW registration failed:', err);
                  });
                });
              }
            `
          }}
        />
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

        {/* Google Analytics Placeholder */}
        {GA_TRACKING_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
              `}
            </Script>
          </>
        )}

        {/* Facebook Pixel Placeholder */}
        {FB_PIXEL_ID !== "123456789012345" && (
          <Script id="fb-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </head>
      <body className={manrope.className} style={{ overflowX: "hidden", position: "relative" }}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
