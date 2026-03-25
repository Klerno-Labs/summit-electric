"use client";

import { useState } from 'react';

const QuoteWizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <label htmlFor="serviceType" className="block mb-2">Select Service Type</label>
            <select name="serviceType" id="serviceType" onChange={handleChange} className="border rounded-md w-full p-2 mb-4">
              <option value="">Select a service</option>
              <option value="electrical-repairs">Electrical Repairs</option>
              <option value="panel-upgrades">Panel Upgrades</option>
              <option value="ev-charging">EV Charging Installation</option>
            </select>
            <button type="button" onClick={() => setStep(2)} className="bg-primary text-white px-4 py-2 rounded-md">Next</button>
          </div>
        )}
        {step === 2 && (
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <input type="text" name="name" id="name" onChange={handleChange} className="border rounded-md w-full p-2 mb-4" required />
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" name="email" id="email" onChange={handleChange} className="border rounded-md w-full p-2 mb-4" required />
            <label htmlFor="phone" className="block mb-2">Phone</label>
            <input type="tel" name="phone" id="phone" onChange={handleChange} className="border rounded-md w-full p-2 mb-4" required />
            <button type="button" onClick={() => setStep(3)} className="bg-primary text-white px-4 py-2 rounded-md">Next</button>
          </div>
        )}
        {step === 3 && (
          <div>
            <label htmlFor="address" className="block mb-2">Address</label>
            <input type="text" name="address" id="address" onChange={handleChange} className="border rounded-md w-full p-2 mb-4" required />
            <label htmlFor="date" className="block mb-2">Preferred Date</label>
            <input type="date" name="date" id="date" onChange={handleChange} className="border rounded-md w-full p-2 mb-4" required />
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default QuoteWizard;