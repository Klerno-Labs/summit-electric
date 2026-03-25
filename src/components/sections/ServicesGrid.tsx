import { images } from "@/config/images";

const services = [
  {
    title: "Electrical Panel Upgrades",
    description: "Upgrade your electrical panel for better performance and safety.",
    image: images["service-1"].src,
  },
  {
    title: "Smart Home Installations",
    description: "Integrate smart technology into your home for convenience.",
    image: images["service-2"].src,
  },
  {
    title: "EV Charging Stations",
    description: "Install a charging station for your electric vehicle at home.",
    image: images["service-3"].src,
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;