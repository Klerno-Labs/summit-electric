const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg">About Us</h3>
            <p>Summit Electric is your trusted local service provider for quality home improvement solutions.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/gallery" className="hover:underline">Gallery</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Contact Info</h3>
            <p>(512) 555-1234</p>
            <p>info@summitelectric.com</p>
            <p>Mon-Fri: 8am-6pm</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Follow Us</h3>
            <ul className="flex space-x-4">
              <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">Facebook</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>© {new Date().getFullYear()} Summit Electric. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;