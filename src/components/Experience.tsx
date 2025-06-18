import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Modenbo Technologies",
      role: "Software Engineer",
      period: "Aug 2023 - Sept 2024",
      location: "Remote",
      description: "Lead in the development, deployment, and maintenance of Goodifly application platform that simplifies logistics across borders.",
      color: "border-blue-200 bg-blue-50"
    },
    {
      company: "CO.LAB",
      role: "Software Developer",
      period: "Oct 2022 – Feb 2023",
      location: "Remote",
      description: "Designed the backend of the AudioScribe application with Ruby, Rails, Devise JWT, etc.",
      color: "border-green-200 bg-green-50"
    },
    {
      company: "Microverse Program",
      role: "Full Stack Web Developer",
      period: "Mar 2022 – Oct 2022",
      location: "Remote",
      description: "Mastered intermediate and advanced topics in full-stack development while building multiple projects independently and via pair programming.",
      color: "border-purple-200 bg-purple-50"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600">
            Building innovative solutions across diverse industries
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className={`${exp.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-gray-900">{exp.role}</CardTitle>
                    <p className="text-lg font-semibold text-gray-700 mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <Badge variant="outline" className="flex items-center gap-1 w-fit">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;