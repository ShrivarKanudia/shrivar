
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  color?: "light" | "dark";
}

const SectionContainer = ({
  id,
  title,
  children,
  className,
  color = "light",
}: SectionContainerProps) => {
  return (
    <section
      id={id}
      className={cn(
        "py-20 px-4",
        color === "light" ? "bg-white" : "bg-portfolio-light",
        className
      )}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-portfolio-primary mb-12 text-center">
          {title}
          <span className="block w-20 h-1 bg-portfolio-accent mx-auto mt-4"></span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
