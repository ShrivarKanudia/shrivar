
import { User } from "lucide-react";
import SectionContainer from "./SectionContainer";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <SectionContainer id="about" title="About Me" color="light">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-portfolio-accent/20 rounded-full"></div>
            <div className="absolute inset-2 bg-portfolio-accent/30 rounded-full flex items-center justify-center">
              <User size={80} className="text-white" />
            </div>
            {/* Replace with actual profile image when available */}
            {/* <img 
              src="/path-to-your-profile-photo.jpg" 
              alt="Shrivar Kanudia" 
              className="absolute inset-0 w-full h-full object-cover rounded-full" 
            /> */}
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <Card className="border-none shadow-md bg-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-portfolio-primary mb-4">Who I Am</h3>
              <p className="text-lg text-portfolio-secondary mb-6 leading-relaxed">
                Hi there! I'm Shrivar Kanudia, a passionate Industrial Engineering student at the University of Illinois at Urbana-Champaign with a focus on Quality Engineering. I have a minor in Computer Science and possess a strong background in both engineering and software skills.
              </p>
              
              <p className="text-lg text-portfolio-secondary mb-6 leading-relaxed">
                My approach to engineering combines analytical thinking with practical problem-solving. I'm dedicated to improving processes, enhancing efficiency, and driving continuous improvement through data analysis and innovative solutions.
              </p>
              
              <p className="text-lg text-portfolio-secondary leading-relaxed">
                With experience in quality engineering, reliability analysis, and manufacturing, I've worked on projects that have delivered tangible results, including cost avoidance, process standardization, and efficiency improvements. I'm always looking for new challenges and opportunities to apply my skills.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
