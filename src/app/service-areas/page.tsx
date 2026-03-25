import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Service Areas | Summit Electric",
  description: "Discover the areas we serve and our commitment to local communities.",
  openGraph: {
    title: "Service Areas | Summit Electric",
    description: "Discover the areas we serve and our commitment to local communities.",
    image: "/images/service-areas.jpg",
  },
};

export default function ServiceAreas() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="text-3xl font-bold">Service Areas</h1>
        <p>We proudly serve the following areas:</p>
        <ul>
          <li>Houston, TX</li>
          <li>Spring, TX</li>
          <li>The Woodlands, TX</li>
          <li>Katy, TX</li>
          <li>Cypress, TX</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}