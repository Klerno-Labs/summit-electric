"use client";
import { cn } from "@/lib/cn";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", onClick, children }) => {
  const baseStyles = "px-4 py-2 rounded-lg transition-all duration-200";
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button className={cn(baseStyles, variantStyles[variant])} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;