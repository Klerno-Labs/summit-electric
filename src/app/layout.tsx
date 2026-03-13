import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://summitelectric-demo.com"),
  title: {
    default: "Summit Electric | Reliable Electrical Services in Austin",
    template: "%s | Summit Electric"
  },
  description: "Trusted local electricians providing residential and commercial electrical services in Austin, TX. Licensed, insured, and available 24/7 for emergencies.",
  openGraph: {
    title: "Summit Electric | Reliable Electrical Services",
    description: "Professional electrical services for your home and business. Licensed, insured, and committed to quality.",
    url: "https://summitelectric-demo.com",
    siteName: "Summit Electric",
    images: [
      {
        url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Summit Electric",
      },
    ],
    locale: "en_US",
    type: "website",
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
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col font-body">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        
        {/* Structured Data for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Electrician",
              "name": "Summit Electric",
              "image": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200",
              "telephone": "+15125550199",
              "email": "info@summitelectric.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1200 Main St, Building B",
                "addressLocality": "Austin",
                "addressRegion": "TX",
                "postalCode": "78701",
                "addressCountry": "US"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "14:00"
                }
              ],
              "priceRange": "$$"
            }),
          }}
        />
      </body>
    </html>
  );
}