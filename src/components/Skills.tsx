import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Settings, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End",
      icon: <Code className="h-6 w-6" />,
      skills: ["JavaScript", "React", "Redux", "HTML5", "CSS3", "Tailwind CSS"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Back-End",
      icon: <Database className="h-6 w-6" />,
      skills: ["Python", "Django", "Ruby", "Rails", "MySQL", "PostgreSQL", "MongoDB"],
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Tools & Methods",
      icon: <Settings className="h-6 w-6" />,
      skills: ["Git", "GitHub", "AWS", "GCP", "RSpec", "TDD", "Chrome Dev Tools"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Professional",
      icon: <Users className="h-6 w-6" />,
      skills: ["Remote Pair-Programming", "Teamwork", "Communication", "Problem-solving", "Creative thinking"],
      color: "bg-orange-50 border-orange-200"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`${category.color} hover:shadow-lg transition-shadow duration-300`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;