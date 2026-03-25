const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a range of electrical services including panel upgrades, smart home installations, and EV charging station setups.",
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, we are fully licensed and insured to provide electrical services in Texas.",
    },
    {
      question: "How can I request a quote?",
      answer: "You can request a quote through our contact form or by calling us directly.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-md mb-4">
              <h3 className="font-semibold">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;