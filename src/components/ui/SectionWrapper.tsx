import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  background?: "white" | "gray" | "primary";
  container?: boolean;
}

const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
  ({ className, background = "white", container = true, children, ...props }, ref) => {
    const bgStyles = {
      white: "bg-white",
      gray: "bg-gray-50",
      primary: "bg-primary",
    };

    return (
      <section
        ref={ref}
        className={cn(
          "py-16 md:py-24 lg:py-32",
          bgStyles[background],
          className
        )}
        {...props}
      >
        <div className={cn(container && "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>
          {children}
        </div>
      </section>
    );
  }
);
SectionWrapper.displayName = "SectionWrapper";

export { SectionWrapper };