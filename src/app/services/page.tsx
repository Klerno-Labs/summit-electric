import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FilterBar from "@/components/forms/FilterBar";
import ServiceList from "@/components/sections/ServicesGrid";

export const metadata = {
  title: "Services | Summit Electric",
  description: "Explore our range of electrical services tailored for your needs.",
  openGraph: {
    title: "Services | Summit Electric",
    description: "Explore our range of electrical services tailored for your needs.",
    image: "/images/service-1.jpg",
  },
};

export default function Services() {
  return (
    <>
      <Navbar />
      <main>
        <FilterBar />
        <ServiceList />
      </main>
      <Footer />
    </>
  );
}