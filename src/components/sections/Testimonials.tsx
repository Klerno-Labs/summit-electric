const testimonials = [
  {
    name: "Maria L.",
    text: "Summit Electric did an amazing job upgrading my electrical panel. The team was professional and efficient!",
  },
  {
    name: "James T.",
    text: "I love my new smart home system! Summit Electric made the installation process seamless.",
  },
  {
    name: "Linda R.",
    text: "Their service was prompt and reliable. I highly recommend Summit Electric for any home repairs.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">What Our Customers Say</h2>
        <div className="mt-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4">
              <p className="italic">"{testimonial.text}"</p>
              <p className="font-semibold mt-2">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;