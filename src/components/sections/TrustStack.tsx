const TrustStack = () => {
  return (
    <div className="bg-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center space-x-8">
        <div className="flex items-center">
          <img src="/path/to/bbb-logo.png" alt="BBB Accredited" className="h-8" />
          <span className="ml-2 text-gray-700">BBB Accredited</span>
        </div>
        <div className="flex items-center">
          <img src="/path/to/license-logo.png" alt="Licensed" className="h-8" />
          <span className="ml-2 text-gray-700">Licensed & Insured</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-700">10+ Years Experience</span>
        </div>
      </div>
    </div>
  );
};

export default TrustStack;