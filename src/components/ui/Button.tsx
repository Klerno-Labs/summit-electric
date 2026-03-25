"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "ghost";
  size: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant, size, href, onClick }) => {
  const baseStyles = "rounded-lg transition-all duration-200";
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-blue-700",
    secondary: "bg-white text-primary border-2 border-primary hover:bg-slate-50",
    ghost: "bg-transparent text-primary hover:bg-primary/10",
  };
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size]);

  return href ? (
    <a className={classes} href={href}>
      {children}
    </a>
  ) : (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;