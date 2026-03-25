import { images } from '@/config/images';

const services = [
  {
    title: 'Electrical Repairs',
    description: 'Fast and reliable electrical repairs for your home.',
    imageSrc: images['service-1'].src,
  },
  {
    title: 'Panel Upgrades',
    description: 'Upgrade your electrical panel for better performance.',
    imageSrc: images['service-2'].src,
  },
  {
    title: 'EV Charging Installation',
    description: 'Install a charging station for your electric vehicle.',
    imageSrc: images['service-3'].src,
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={service.imageSrc} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;