
import { School } from "lucide-react";
import SectionContainer from "./SectionContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EducationItemProps {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  courses: string[];
}

const educationItems: EducationItemProps[] = [
  {
    institution: "University of Illinois at Urbana-Champaign",
    degree: "Bachelor of Science in Industrial Engineering: Quality Engineering, Minor: Computer Science",
    period: "Expected Graduation: May 2026",
    gpa: "3.95/4.0",
    courses: [
      "Six Sigma Yellow Belt",
      "FMEA",
      "SPC",
      "Lean Manufacturing",
      "Continuous Improvement",
      "Data Analysis",
      "Root Cause Analysis",
      "Process Control",
      "Time Studies Analysis",
      "Facilities Design",
      "Production Planning",
      "Linear Optimization"
    ]
  }
];

const EducationItem = ({ institution, degree, period, gpa, courses }: EducationItemProps) => {
  return (
    <Card className="mb-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-shrink-0 bg-portfolio-accent/10 p-3 rounded-full">
            <School className="w-6 h-6 text-portfolio-accent" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-portfolio-primary">{institution}</h3>
            <p className="text-lg text-portfolio-secondary">{degree}</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2">
              <span className="text-sm text-portfolio-secondary/80">{period}</span>
              <Badge variant="secondary" className="bg-portfolio-accent/20 text-portfolio-accent w-fit">
                GPA: {gpa}
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="text-md font-medium text-portfolio-primary mb-2">Relevant Courses:</h4>
          <div className="flex flex-wrap gap-2">
            {courses.map((course, index) => (
              <Badge key={index} variant="outline" className="border-portfolio-accent/30 text-portfolio-secondary">
                {course}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const EducationSection = () => {
  return (
    <SectionContainer id="education" title="Education" color="dark">
      <div className="max-w-3xl mx-auto">
        {educationItems.map((item, index) => (
          <EducationItem key={index} {...item} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default EducationSection;
