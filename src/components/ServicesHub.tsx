import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Electrical Repairs",
    description: "Expert repairs for all electrical issues.",
    icon: "menu-1",
    link: "/services/electrical-repairs",
  },
  {
    title: "Panel Upgrades",
    description: "Upgrade your electrical panel for better efficiency.",
    icon: "menu-2",
    link: "/services/panel-upgrades",
  },
  {
    title: "Smart Home Solutions",
    description: "Integrate smart technology into your home.",
    icon: "menu-1",
    link: "/services/smart-home-solutions",
  },
];

const ServicesHub = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHub;