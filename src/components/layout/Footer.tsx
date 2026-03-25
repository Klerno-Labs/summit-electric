import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold">About Us</h3>
            <p>Summit Electric is your trusted local service provider for quality home improvement solutions.</p>
          </div>
          <div>
            <h3 className="font-bold">Quick Links</h3>
            <ul>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/gallery" className="hover:underline">Gallery</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Contact Us</h3>
            <p>{siteConfig.address}</p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
          </div>
          <div>
            <h3 className="font-bold">Follow Us</h3>
            <ul>
              <li><a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
              <li><a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
              <li><a href={siteConfig.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>© {new Date().getFullYear()} Summit Electric. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;