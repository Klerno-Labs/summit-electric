import * as React from "react";
import { cn } from "@/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, children, ...props }, ref) => {
    const baseStyles = "font-heading font-bold tracking-tight text-foreground";
    
    const levelStyles = {
      1: "text-4xl sm:text-5xl lg:text-6xl",
      2: "text-3xl sm:text-4xl lg:text-5xl",
      3: "text-2xl sm:text-3xl font-bold",
      4: "text-xl sm:text-2xl font-semibold",
    };

    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
      <Tag
        ref={ref}
        className={cn(baseStyles, levelStyles[level], className)}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);
Heading.displayName = "Heading";

export { Heading };