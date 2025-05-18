
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-portfolio-light to-white py-20 px-4">
      <div className="container mx-auto text-center max-w-3xl">
        <h1 className={cn(
          "text-5xl md:text-6xl font-bold font-heading text-portfolio-primary mb-6",
          "animate-fade-in [animation-delay:200ms]"
        )}>
          Hello, I'm <span className="text-portfolio-accent">Your Name</span>
        </h1>
        <p className={cn(
          "text-xl md:text-2xl text-portfolio-secondary mb-10 leading-relaxed",
          "animate-fade-in [animation-delay:400ms]"
        )}>
          I'm a professional specializing in web development, design, and creative problem-solving.
        </p>
        <div className={cn(
          "flex flex-col sm:flex-row gap-4 justify-center",
          "animate-fade-in [animation-delay:600ms]"
        )}>
          <Button 
            className="bg-portfolio-accent hover:bg-portfolio-primary text-white font-medium px-8 py-6 rounded-lg text-lg"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                window.scrollTo({
                  top: contactSection.offsetTop - 80,
                  behavior: "smooth",
                });
              }
            }}
          >
            Get in Touch
          </Button>
          <Button 
            variant="outline" 
            className="bg-transparent border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10 font-medium px-8 py-6 rounded-lg text-lg"
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              if (projectsSection) {
                window.scrollTo({
                  top: projectsSection.offsetTop - 80,
                  behavior: "smooth",
                });
              }
            }}
          >
            View My Work
          </Button>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute bottom-10 animate-bounce text-portfolio-primary/70 hover:text-portfolio-primary hover:bg-transparent",
          "animate-fade-in [animation-delay:1200ms]"
        )}
        onClick={scrollToNextSection}
      >
        <ArrowDown size={28} />
      </Button>
    </section>
  );
};

export default Hero;
