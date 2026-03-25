export const metadata = {
  title: "Summit Electric - Trusted Local Electricians",
  description: "Summit Electric provides reliable home improvement solutions and quality workmanship for all your electrical needs.",
  openGraph: {
    title: "Summit Electric - Trusted Local Electricians",
    description: "Summit Electric provides reliable home improvement solutions and quality workmanship for all your electrical needs.",
    images: [
      {
        url: "https://mfile.z.ai/1774397102220-3155203c94d14148ae8a97ae4a4045a0.png?ufileattname=2026032508045428c39f70143942fc_watermark.png",
        width: 1200,
        height: 800,
      },
    ],
  },
};

const LocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Summit Electric",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4521 Westheimer Rd, Suite 200",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77027",
  },
  telephone: "(713) 555-1234",
  email: "info@summitelectric.com",
  openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-14:00, Su Closed",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(LocalBusinessSchema)}</script>
      {/* Other components */}
    </>
  );
}