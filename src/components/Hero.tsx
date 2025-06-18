import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            Available for Opportunities
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Joseph Kwesi Kwentsir
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Full Stack Software Engineer
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Building modern web applications with Python, Django, Ruby on Rails, Java, SpringBoot, React, JavaScript, etc. 
            Passionate about creating scalable solutions and exceptional user experiences.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
        <a href="mailto:kwentsirkwesi@gmail.com">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </a>
        <a href="https://github.com/Kwentsir" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/josephkwentsir/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="lg">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </a>
        <a href="https://x.com/jkwentsir" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="lg">
            <Twitter className="mr-2 h-4 w-4" />
            Twitter
          </Button>
        </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2">
          {["React", "Python", "Django", "Ruby on Rails", "JavaScript", "PostgreSQL"].map((tech) => (
            <Badge key={tech} variant="outline" className="px-3 py-1">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;