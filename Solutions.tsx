import { useState } from "react";
import { ChevronLeft, ChevronRight, Headphones, Cog, Users, BarChart3 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const solutions = [
  {
    icon: Headphones,
    title: "Customer Support Services",
    description: "Comprehensive customer support solutions with multi-channel communication, ticket management, and knowledge base integration.",
    image: "https://images.unsplash.com/photo-1709715357510-b687304cee3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjB0ZWFtfGVufDF8fHx8MTc1ODQ0NTE0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["24/7 multi-channel support", "Automated ticket routing", "Customer satisfaction tracking"]
  },
  {
    icon: Cog,
    title: "IT Service Management",
    description: "Complete ITSM solution with incident management, change control, asset tracking, and service catalog management.",
    image: "https://images.unsplash.com/photo-1589458191985-1020a3ac6d5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHNlcnZpY2UlMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc1ODQ0NTE1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["ITIL-aligned processes", "Automated change management", "Real-time system monitoring"]
  },
  {
    icon: Users,
    title: "Field Service Management",
    description: "Optimize field operations with mobile workforce management, scheduling optimization, and real-time technician tracking.",
    image: "https://images.unsplash.com/photo-1705417272217-490f4511abeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWxwJTIwZGVzayUyMHN1cHBvcnR8ZW58MXx8fHwxNzU4NDA3MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["Intelligent scheduling", "Mobile workforce apps", "GPS tracking & routing"]
  },
  {
    icon: BarChart3,
    title: "Business Process Automation",
    description: "Streamline operations with intelligent workflow automation, approval processes, and performance analytics.",
    image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF1dG9tYXRpb24lMjB3b3JrZmxvd3xlbnwxfHx8fDE3NTg0NDUxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["Custom workflow design", "Automated approvals", "Performance monitoring"]
  }
];

export function Solutions() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % solutions.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + solutions.length) % solutions.length);
  };

  const currentSolution = solutions[currentIndex];

  return (
    <section id="solutions" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Service Solutions for Every Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From customer support to IT operations, our comprehensive service management 
            platform adapts to your unique business needs.
          </p>
        </div>

        <div className="relative">
          <Card className="border-0 bg-gradient-to-br from-muted/50 to-accent/30 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12 space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-700 rounded-lg flex items-center justify-center">
                      <currentSolution.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {currentSolution.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {currentSolution.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {currentSolution.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button size="lg" className="mt-6">
                    Learn More
                  </Button>
                </div>

                <div className="relative h-64 lg:h-auto">
                  <ImageWithFallback
                    src={currentSolution.image}
                    alt={currentSolution.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-12 h-12 rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex space-x-2">
              {solutions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-12 h-12 rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}