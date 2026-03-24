import { images } from "@/config/images";

const ServicesHub: React.FC = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src={images["service-1"].src} alt={images["service-1"].alt} className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold">Electrical Repair</h3>
          <p className="text-gray-600">Fast and reliable electrical repair services for your home.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src={images["service-2"].src} alt={images["service-2"].alt} className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold">Panel Upgrades</h3>
          <p className="text-gray-600">Upgrade your electrical panel for better performance and safety.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src={images["service-3"].src} alt={images["service-3"].alt} className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold">Smart Home Solutions</h3>
          <p className="text-gray-600">Integrate smart technology into your home for convenience and efficiency.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHub;