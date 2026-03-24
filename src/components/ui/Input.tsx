"use client";
import { cn } from "@/lib/cn";

interface InputProps {
  id: string;
  label: string;
  type: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ id, label, type, required }) => {
  return (
    <div className="relative mb-6">
      <input
        type={type}
        id={id}
        required={required}
        className={cn("peer w-full bg-slate-50 border border-slate-200 rounded-lg px-4 pt-5 pb-2 text-slate-900 placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all")}
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-3 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1 cursor-text"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;