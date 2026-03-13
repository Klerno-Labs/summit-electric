import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

const headingFont = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const bodyFont = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Electrician",
              "name": siteConfig.name,
              "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200",
              "telephone": siteConfig.contact.phone,
              "email": siteConfig.contact.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "7825 Lamar Blvd, Suite 100",
                "addressLocality": "Austin",
                "addressRegion": "TX",
                "postalCode": "78752",
                "addressCountry": "US"
              },
              "priceRange": "$$",
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
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}