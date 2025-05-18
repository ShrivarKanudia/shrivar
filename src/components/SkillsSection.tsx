
import { Star } from "lucide-react";
import SectionContainer from "./SectionContainer";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Industrial Engineering",
    skills: [
      { name: "Six Sigma Yellow Belt", level: 90 },
      { name: "FMEA & SPC", level: 85 },
      { name: "Lean Manufacturing", level: 88 },
      { name: "Data Analysis", level: 92 },
      { name: "Process Control", level: 87 }
    ]
  },
  {
    name: "Mechanical Engineering",
    skills: [
      { name: "Rapid Prototyping", level: 90 },
      { name: "Material Testing", level: 85 },
      { name: "Manufacturing Tools", level: 88 },
      { name: "GD&T", level: 80 },
      { name: "DFM/DFA", level: 82 }
    ]
  },
  {
    name: "Software",
    skills: [
      { name: "C++/Python", level: 85 },
      { name: "SQL", level: 80 },
      { name: "MATLAB", level: 85 },
      { name: "SolidWorks/AutoCAD", level: 90 },
      { name: "Power BI", level: 82 }
    ]
  }
];

const SkillsSection = () => {
  return (
    <SectionContainer id="skills" title="Skills" color="light">
      <Card className="border-none shadow-lg max-w-4xl mx-auto">
        <CardContent className="p-6">
          <Tabs defaultValue="Industrial Engineering">
            <TabsList className="grid grid-cols-3 mb-8 bg-portfolio-light">
              {skillCategories.map((category) => (
                <TabsTrigger 
                  key={category.name} 
                  value={category.name}
                  className="data-[state=active]:bg-portfolio-accent data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {skillCategories.map((category) => (
              <TabsContent key={category.name} value={category.name}>
                <div className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-portfolio-accent mr-2" />
                          <span className="font-medium text-portfolio-primary">{skill.name}</span>
                        </div>
                        <span className="text-sm text-portfolio-secondary">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-portfolio-light">
                        <div className="h-full bg-portfolio-accent" style={{ width: `${skill.level}%` }} />
                      </Progress>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </SectionContainer>
  );
};

export default SkillsSection;
