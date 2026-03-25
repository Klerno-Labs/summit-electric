const FAQ = () => {
  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a wide range of electrical services including repairs, installations, and upgrades.',
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes, we are fully licensed and insured for your peace of mind.',
    },
    {
      question: 'How can I request a quote?',
      answer: 'You can request a quote through our online form or by calling us directly.',
    },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index} className="mb-4">
            <h3 className="font-semibold">{faq.question}</h3>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;