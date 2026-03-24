const TrustNarrative = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Why Trust Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-900">Local Expertise</h3>
            <p className="text-slate-600">
              We have been serving the local community for over 15 years, providing reliable and professional home services.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-900">Licensed & Insured</h3>
            <p className="text-slate-600">
              Our team is fully licensed and insured, ensuring peace of mind for all our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustNarrative;