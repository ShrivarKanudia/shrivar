
import { Briefcase } from "lucide-react";
import SectionContainer from "./SectionContainer";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ExperienceItemProps {
  position: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

const experiences: ExperienceItemProps[] = [
  {
    position: "Incoming Quality Engineering Summer Intern",
    company: "Cummins Inc",
    period: "May 2025 - Aug 2025",
    location: "Seymour, Indiana",
    description: [
      "Will be working at the Seymour Engine Plant"
    ]
  },
  {
    position: "Reliability Engineering Intern",
    company: "Cummins Inc",
    period: "May 2024 - Aug 2024",
    location: "Columbus, Indiana",
    description: [
      "Analyzed life data, failed parts & supplier quality, identified top 5 recurring failcodes monthly on ISX12N & L9N engines",
      "Inspected failed L9N engine to identify wear from poor maintenance; documented findings to improve future inspections",
      "Conducted Weibull analysis to identify failure modes, escalated critical issues and enabled $38K in cost avoidance",
      "Supported 8 failure review meetings using SPC, Weibull and failure analysis; escalated VPCRs & improved compliance",
      "Automated failcode analysis diagnostics via OpenAI API, reducing engine issue identification cycle time by 12%",
      "Validated project tracking system - SQL, resolved data gaps across 3 databases & implemented process standardization",
      "Assessed 4 M&A sites for quality risks, deployed fixtures to stabilize output and boost operational equipment efficiency"
    ]
  },
  {
    position: "Manufacturing Lead",
    company: "BYLD Innovations",
    period: "Jan 2023 - Present",
    location: "Champaign, Illinois",
    description: [
      "Built portable 3D printer using PLA and 6061 H14 aluminum, waterjet & 3D printing for lightweight rapid prototyping",
      "Designed extruder for manufacturability with GD&T compliance, improving production reliability & assembly efficiency",
      "Optimized extruder design, upgraded fasteners and materials to achieved 3x thermal safety and lower torque",
      "Engineered QMS for beta testing and NPI, ensuring process standardization and smoother product validation",
      "Facilitated cross collaboration between design & manufacturing teams, reducing defective part production by 20%",
      "Secured $60K funding, filed patent (pending); COZAD Finalist (top 2%), CNVC Finalist and iVenture Cohort 9 member"
    ]
  },
  {
    position: "Teaching Assistant - Engineering 100",
    company: "The Grainger College of Engineering",
    period: "Aug 2024 - Dec 2024",
    location: "University of Illinois, Urbana-Champaign",
    description: [
      "Mentored 20 ISE students, providing academic and career guidance to improve retention, performance and engagement",
      "Led 4 student teams on campus-focused design projects, guiding ideation through prototyping for facility improvements"
    ]
  }
];

const ExperienceItem = ({ position, company, period, location, description }: ExperienceItemProps) => {
  return (
    <Card className="mb-10 border-none shadow-md hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row">
          <div className="flex-shrink-0 mr-6">
            <div className="w-12 h-12 rounded-full bg-portfolio-accent/10 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-portfolio-accent" />
            </div>
          </div>
          <div className="flex-grow mt-4 md:mt-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-portfolio-primary">{position}</h3>
              <span className="text-sm font-medium text-portfolio-accent mt-1 sm:mt-0">{period}</span>
            </div>
            <div className="mb-4">
              <p className="text-lg text-portfolio-secondary">{company}</p>
              <p className="text-sm text-portfolio-secondary/70">{location}</p>
            </div>
            <ul className="space-y-2 list-disc list-inside text-portfolio-secondary">
              {description.map((item, index) => (
                <li key={index} className="text-base">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ExperienceSection = () => {
  return (
    <SectionContainer id="experience" title="Professional Experience" color="light">
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute top-6 bottom-0 left-6 md:left-6 w-0.5 bg-portfolio-accent/20 hidden md:block"></div>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className={cn(
              "relative",
              index !== experiences.length - 1 && "mb-12"
            )}>
              <ExperienceItem {...experience} />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
