"use client";

import React from "react";
import { cn } from "@/lib/utils";

const QuoteWizard = () => {
  return (
    <form className={cn("space-y-4")}>
      <label htmlFor="service">Select Service</label>
      <select id="service" name="service" required>
        <option value="">Choose a service</option>
        <option value="electrical-repair">Electrical Repair</option>
        <option value="panel-upgrade">Panel Upgrade</option>
        <option value="ev-charging">EV Charging Installation</option>
      </select>
      <label htmlFor="name">Your Name</label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="phone">Your Phone</label>
      <input type="tel" id="phone" name="phone" required />
      <button type="submit" className={cn("bg-primary text-white px-6 py-2 rounded-lg")}>Get My Quote</button>
    </form>
  );
};

export default QuoteWizard;