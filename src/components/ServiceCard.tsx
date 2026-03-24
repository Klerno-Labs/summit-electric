import { images } from "@/config/images";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors mb-6">
        <img src={images[icon].src} alt={icon} className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 line-clamp-2 mb-6 leading-relaxed">
        {description}
      </p>
      <div className="flex items-center text-blue-600 font-medium group-hover:gap-3 gap-2 transition-all">
        Learn More
        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </div>
    </div>
  );
};

export default ServiceCard;