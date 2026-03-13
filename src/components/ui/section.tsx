import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: "default" | "gray" | "dark";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", id, children, ...props }, ref) => {
    const backgrounds = {
      default: "bg-white",
      gray: "bg-slate-50",
      dark: "bg-gray-900 text-white",
    };

    return (
      <section
        id={id}
        className={cn(
          "py-16 md:py-24 lg:py-32 w-full",
          backgrounds[variant],
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="container-custom">{children}</div>
      </section>
    );
  }
);
Section.displayName = "Section";

export { Section };