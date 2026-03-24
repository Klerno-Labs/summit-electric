"use client";
import { cn } from "@/lib/cn";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  label: string;
  options: Option[];
  required?: boolean;
}

const Select: React.FC<SelectProps> = ({ id, label, options, required }) => {
  return (
    <div className="relative mb-6">
      <select
        id={id}
        required={required}
        className={cn("peer w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all")}
      >
        <option value="" disabled hidden>{label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className="absolute left-4 top-3 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1 cursor-text"
      >
        {label}
      </label>
    </div>
  );
};

export default Select;