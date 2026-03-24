import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg">About Us</h3>
            <p>{siteConfig.description}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul>
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-white">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Contact Info</h3>
            <p className="flex items-center">
              <MapPin className="mr-2" />
              {siteConfig.address}
            </p>
            <p className="flex items-center">
              <Phone className="mr-2" />
              {siteConfig.phone}
            </p>
            <p className="flex items-center">
              <Mail className="mr-2" />
              {siteConfig.email}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Follow Us</h3>
            <ul>
              <li>
                <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Facebook</a>
              </li>
              <li>
                <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Twitter</a>
              </li>
              <li>
                <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;