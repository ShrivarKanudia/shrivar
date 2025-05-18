
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavLink {
  id: string;
  label: string;
}

const navLinks: NavLink[] = [
  { id: "about", label: "About Me" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);

      // Calculate which section is currently in view
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const currentSection = sections.reduce(
        (closest, section, index) => {
          if (!section) return closest;
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight &&
            Math.abs(scrollPosition - sectionTop) < Math.abs(scrollPosition - closest.top)
          ) {
            return { top: sectionTop, id: navLinks[index].id };
          }
          return closest;
        },
        { top: -Infinity, id: "about" }
      );

      setActiveSection(currentSection.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white bg-opacity-90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#about" 
          className="text-2xl font-heading font-bold text-portfolio-primary"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          Portfolio
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-primary" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              className={cn(
                "font-medium transition-colors",
                activeSection === link.id
                  ? "text-portfolio-accent"
                  : "text-portfolio-secondary hover:text-portfolio-accent"
              )}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </Button>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md shadow-md transition-all duration-300 overflow-hidden",
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        )}
      >
        <nav className="flex flex-col space-y-2 px-4">
          {navLinks.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              className={cn(
                "font-medium justify-start",
                activeSection === link.id
                  ? "text-portfolio-accent"
                  : "text-portfolio-secondary hover:text-portfolio-accent"
              )}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
