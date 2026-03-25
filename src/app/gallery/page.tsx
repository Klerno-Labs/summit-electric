import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Gallery from "@/components/sections/Gallery";

export const metadata = {
  title: "Gallery | Summit Electric",
  description: "View our completed projects and see our quality workmanship.",
  openGraph: {
    title: "Gallery | Summit Electric",
    description: "View our completed projects and see our quality workmanship.",
    image: "/images/gallery-1.jpg",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <Gallery />
      </main>
      <Footer />
    </>
  );
}