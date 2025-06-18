import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Microverse",
      degree: "Remote Full Stack Web Development Program",
      period: "Mar 2022 – Oct 2022",
      type: "Full Time",
      description: "Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux. Developed skills in remote pair programming using GitHub, industry-standard gitflow, and daily standups.",
      highlights: ["1300+ hours", "Algorithms & Data Structures", "Remote Pair Programming", "GitHub Workflow"],
      color: "border-blue-200 bg-blue-50"
    },
    {
      institution: "Kwame Nkrumah University of Science and Technology",
      degree: "BSc. Mathematics",
      period: "Sept 2010 – Jun 2014",
      type: "Bachelor's Degree",
      description: "Awarded a bachelor's degree in Mathematics. Developed skills in creative thinking, problem-solving, and communicating complex ideas.",
      highlights: ["Mathematics", "Problem-solving", "Creative thinking", "Complex communication"],
      color: "border-green-200 bg-green-50"
    }
  ];

  const additionalExperience = [
    {
      role: "Computer Lab Trainer",
      institution: "KNUST",
      period: "Sept 2014 – Jul 2015",
      description: "Trained over 1500 final-year students on Microsoft Office and LaTeX. Trained first-year MasterCard Foundation Scholars on computer lab usage.",
      impact: "1500+ students trained"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Training</h2>
          <p className="text-lg text-gray-600">
            Continuous learning and skill development
          </p>
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className={`${edu.color} hover:shadow-lg transition-all duration-300`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-gray-600" />
                    <div>
                      <CardTitle className="text-xl text-gray-900">{edu.degree}</CardTitle>
                      <p className="text-lg font-semibold text-gray-700 mt-1">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge variant="outline" className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      {edu.period}
                    </Badge>
                    <Badge variant="secondary">{edu.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">{edu.description}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight, hIndex) => (
                    <Badge key={hIndex} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          
          {additionalExperience.map((exp, index) => (
            <Card key={`additional-${index}`} className="border-purple-200 bg-purple-50 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900">{exp.role}</CardTitle>
                    <p className="text-lg font-semibold text-gray-700 mt-1">{exp.institution}</p>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">{exp.description}</p>
                <Badge variant="secondary" className="text-xs">{exp.impact}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;