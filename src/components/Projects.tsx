import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Food Recipe App",
      description: "Web application for tracking recipe collection, inventories, and ingredients. Users can create recipes, record ingredients, and generate a shopping list based on the food inventory.",
      technologies: ["Ruby", "Rails", "PostgreSQL", "devise-jwt"],
      color: "border-red-200 bg-red-50"
    },
    {
      title: "Quick Budget App",
      description: "Web application for managing a budget. It's user-friendly and fun for users to categorise their budgets.",
      technologies: ["Ruby", "Rails", "RSpec", "PostgreSQL"],
      color: "border-green-200 bg-green-50"
    },
    {
      title: "Covid-19 Tracker App",
      description: "Web application that displays metric data from an API for covid-19 cases in different countries.",
      technologies: ["JavaScript", "React", "Redux"],
      color: "border-blue-200 bg-blue-50"
    },
    {
      title: "To-Do List App",
      description: "Simple web application for managing to-dos. Users are able to add a new task, update the description, mark the task as complete, remove a task from the list and clear all completed tasks.",
      technologies: ["JavaScript", "Webpack"],
      color: "border-purple-200 bg-purple-50"
    },
    {
      title: "Ghana Tech Conference Website",
      description: "Website designed for a Tech Conference in Ghana.",
      technologies: ["HTML", "CSS", "JavaScript"],
      color: "border-yellow-200 bg-yellow-50"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of full-stack applications built with modern technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`${project.color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col`}>
              <CardHeader className="flex-grow">
                <CardTitle className="text-xl text-gray-900 mb-3">{project.title}</CardTitle>
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;