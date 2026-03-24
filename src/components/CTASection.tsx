const CTASection = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6">Contact us today for a free estimate on your next project!</p>
        <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all">
          Get a Free Estimate
        </a>
      </div>
    </section>
  );
};

export default CTASection;