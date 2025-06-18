import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, Twitter, Globe, MessageSquare } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: <Mail className="h-5 w-5" />, label: "Email", href: "mailto:kwentsirkwesi@gmail.com", color: "bg-red-500 hover:bg-red-600" },
    { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "https://github.com/Kwentsir", color: "bg-gray-800 hover:bg-gray-900" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/josephkwentsir/", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "https://x.com/jkwentsir", color: "bg-sky-500 hover:bg-sky-600" },
    { icon: <Globe className="h-5 w-5" />, label: "Portfolio", href: "#", color: "bg-purple-600 hover:bg-purple-700" },
    { icon: <MessageSquare className="h-5 w-5" />, label: "Medium", href: "https://medium.com/@josephkwesikwentsir", color: "bg-green-600 hover:bg-green-700" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                <Mail className="h-6 w-6" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className={`${link.color} text-white border-0 hover:scale-105 transition-all duration-200`}
                      asChild
                    >
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        {link.icon}
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-3 text-gray-600">
                  <p>🌍 Available for remote opportunities worldwide</p>
                  <p>⚡ Specialized in full-stack web development</p>
                  <p>🚀 1300+ hours of intensive coding experience</p>
                  <p>🤝 Experienced in remote pair programming</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;