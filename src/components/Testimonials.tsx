const testimonials = [
  {
    name: "Maria L.",
    text: "Summit Electric did an amazing job installing our new lighting fixtures. They were professional and efficient!",
  },
  {
    name: "James T.",
    text: "I had a panel upgrade done, and the team was fantastic. They explained everything clearly and left no mess behind.",
  },
  {
    name: "Sarah K.",
    text: "The service was top-notch! I highly recommend Summit Electric for any electrical work.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-slate-600 italic">"{testimonial.text}"</p>
              <p className="mt-4 font-semibold text-slate-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;