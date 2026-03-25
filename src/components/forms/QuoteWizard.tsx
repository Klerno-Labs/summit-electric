"use client";
import { useState } from "react";

const QuoteWizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Thank you! We'll be in touch soon.");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-bold">Step 1: Select Service</h2>
          <select name="serviceType" onChange={handleChange} required className="mt-2 border border-gray-300 rounded-md p-2">
            <option value="">Select a service</option>
            <option value="electrical">Electrical</option>
            <option value="plumbing">Plumbing</option>
            <option value="hvac">HVAC</option>
          </select>
          <button type="button" onClick={() => setStep(2)} className="mt-4 bg-accent text-white px-4 py-2 rounded-md">Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-bold">Step 2: Your Details</h2>
          <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required className="mt-2 border border-gray-300 rounded-md p-2 w-full" />
          <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required className="mt-2 border border-gray-300 rounded-md p-2 w-full" />
          <input type="tel" name="phone" placeholder="Your Phone" onChange={handleChange} required className="mt-2 border border-gray-300 rounded-md p-2 w-full" />
          <input type="text" name="address" placeholder="Your Address" onChange={handleChange} required className="mt-2 border border-gray-300 rounded-md p-2 w-full" />
          <input type="date" name="date" onChange={handleChange} required className="mt-2 border border-gray-300 rounded-md p-2 w-full" />
          <button type="submit" className="mt-4 bg-accent text-white px-4 py-2 rounded-md">Submit</button>
        </div>
      )}
    </form>
  );
};

export default QuoteWizard;