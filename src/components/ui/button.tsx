import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[#0056b3] text-white hover:bg-[#004494] hover:shadow-lg active:scale-[0.98] focus-visible:ring-[#0056b3]",
        accent: "bg-[#ff6b00] text-white hover:bg-[#e65c00] hover:shadow-lg active:scale-[0.98] focus-visible:ring-[#ff6b00]",
        outline: "border-2 border-[#0056b3] text-[#0056b3] hover:bg-[#0056b3] hover:text-white active:scale-[0.98] focus-visible:ring-[#0056b3]",
        ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-400",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };