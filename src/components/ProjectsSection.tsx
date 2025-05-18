
import { Folder } from "lucide-react";
import SectionContainer from "./SectionContainer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectItemProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
  period: string;
  location: string;
}

const projects: ProjectItemProps[] = [
  {
    title: "Illinois Design Challenge",
    description: "President of engineering design competition focusing on real-world engineering challenges, including heavy handling, welding and first responder safety.",
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
    tags: ["Leadership", "Engineering Design", "Project Management", "Event Planning"],
    period: "Aug 2022 - Present",
    location: "University of Illinois at Urbana-Champaign",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "BikeSafe, Mottier Innovation Challenge",
    description: "Designed and prototyped a bike anti-theft device featuring electric shock, GPS tracking, and alarm system as a three-tiered security solution.",
    imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e",
    tags: ["Product Design", "Prototyping", "Supply Chain Management", "Innovation"],
    period: "Sep 2022 - Dec 2022",
    location: "University of Illinois at Urbana-Champaign",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Portable 3D Printer",
    description: "Built a lightweight portable 3D printer using PLA and 6061 H14 aluminum, leveraging waterjet and 3D printing techniques for rapid prototyping.",
    imageUrl: "https://images.unsplash.com/photo-1571113378205-db152d50b7bf",
    tags: ["3D Printing", "Hardware Design", "Manufacturing", "Mechanical Engineering"],
    period: "Jan 2023 - Present",
    location: "BYLD Innovations, Champaign",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Failcode Analysis Automation",
    description: "Developed an automated diagnostic tool using OpenAI API to analyze engine failcodes, reducing identification cycle time by 12%.",
    imageUrl: "https://images.unsplash.com/photo-1607606116242-357a0bd4404f",
    tags: ["AI/ML", "Automation", "Data Analysis", "Process Improvement"],
    period: "May 2024 - Aug 2024",
    location: "Cummins Inc, Columbus, Indiana",
    demoUrl: "#",
    codeUrl: "#"
  }
];

const ProjectItem = ({ title, description, imageUrl, tags, demoUrl, codeUrl, period, location }: ProjectItemProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-portfolio-primary/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Folder className="w-12 h-12 text-white" />
        </div>
      </div>
      <CardContent className="flex-grow p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-portfolio-primary">{title}</h3>
          <span className="text-xs text-portfolio-accent mt-1 sm:mt-0">{period}</span>
        </div>
        <p className="text-sm text-portfolio-secondary/70 mb-2">{location}</p>
        <p className="text-portfolio-secondary mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-portfolio-accent/10 text-portfolio-accent px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 border-t border-gray-100">
        <div className="flex gap-3 w-full">
          <Button 
            variant="default" 
            size="sm" 
            className="flex-1 bg-portfolio-accent hover:bg-portfolio-primary"
            onClick={() => window.open(demoUrl, "_blank")}
          >
            View Details
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10"
            onClick={() => window.open(codeUrl, "_blank")}
          >
            Project Files
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = () => {
  return (
    <SectionContainer id="projects" title="Projects" color="dark">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
