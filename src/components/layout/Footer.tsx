const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold">About Us</h3>
          <p className="mt-2 text-sm">Summit Electric is your trusted local service provider for all electrical needs.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/gallery" className="hover:underline">Gallery</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Contact Us</h3>
          <p className="mt-2 text-sm">Phone: (512) 555-1234</p>
          <p className="text-sm">Email: info@summitelectric.com</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Newsletter</h3>
          <form className="mt-2">
            <input type="email" placeholder="Your email" className="p-2 rounded-md w-full" />
            <button type="submit" className="mt-2 bg-accent text-white p-2 rounded-md w-full">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center py-4 border-t border-gray-700">
        <p>© {new Date().getFullYear()} Summit Electric. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;