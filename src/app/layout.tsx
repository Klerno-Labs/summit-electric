import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileCTA } from "@/components/layout/mobile-cta";
import { siteConfig } from "@/config/site";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"]
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  weight: ["300", "400", "600", "700"]
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["electrician", "Houston", "residential electrical", "commercial electrical", "emergency repair"],
  authors: [{ name: siteConfig.name }],
  creator: "Pegrio",
  metadataBase: new URL("https://summitelectric.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <MobileCTA />
        <Footer />
        
        {/* Structured Data for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Electrician",
              "name": siteConfig.name,
              "image": "https://summitelectric.com/logo.png",
              "@id": "https://summitelectric.com",
              "url": "https://summitelectric.com",
              "telephone": siteConfig.contact.phone,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4521 Westheimer Rd, Suite 200",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "postalCode": "77027",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.7379,
                "longitude": -95.4335
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
              },
              "priceRange": "$$"
            }),
          }}
        />
      </body>
    </html>
  );
}