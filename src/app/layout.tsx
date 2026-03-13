import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { siteConfig } from "@/config/site";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL("https://summitelectric-demo.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable}`}>
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <MobileCTA />
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Electrician",
              name: siteConfig.name,
              image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200",
              "@id": siteConfig.url,
              url: siteConfig.url,
              telephone: siteConfig.contact.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: "4521 Westheimer Rd, Suite 200",
                addressLocality: "Austin",
                addressRegion: "TX",
                postalCode: "77027",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 30.2672,
                longitude: -97.7431,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "07:00",
                closes: "18:00",
              },
              priceRange: "$$",
            }),
          }}
        />
      </body>
    </html>
  );
}