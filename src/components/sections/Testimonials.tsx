const testimonials = [
  {
    name: 'Maria L.',
    text: 'Summit Electric provided exceptional service when I needed my electrical panel upgraded. They were quick, professional, and the results were fantastic!',
  },
  {
    name: 'James T.',
    text: 'I had a great experience with Summit Electric. They installed my EV charger and explained everything clearly. Highly recommend!',
  },
  {
    name: 'Sarah K.',
    text: 'The team at Summit Electric was very responsive and did an excellent job fixing the wiring in my home. I will definitely use them again!',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <p className="text-lg italic">"{testimonial.text}"</p>
            <p className="mt-4 font-semibold">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;