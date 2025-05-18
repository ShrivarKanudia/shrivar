
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-portfolio-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Shrivar Kanudia</h3>
            <p className="text-gray-300">Industrial Engineering | Quality Engineering</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-full mb-4"
            >
              <ArrowUp size={20} />
            </Button>
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Shrivar Kanudia. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
