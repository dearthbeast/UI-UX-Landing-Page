import { Button } from "./ui/button";
import { ArrowRight, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-primary">
              <Target className="w-5 h-5" />
              <span className="text-sm font-semibold">Service Excellence Platform</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground">
                Streamline Your{" "}
                <span className="bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">
                  Service Operations
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Optimize your business processes with our comprehensive service management platform. 
                Boost efficiency, enhance customer satisfaction, and scale your operations seamlessly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('demo')}
                className="text-lg px-8 py-6"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('features')}
                className="text-lg px-8 py-6"
              >
                View Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">1000+</div>
                <div className="text-sm text-muted-foreground">Active Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-700/20 rounded-3xl blur-3xl"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1640323240640-ee731d18dcb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNlcnZpY2UlMjBtYW5hZ2VtZW50JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODQ0NTEwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Service Management Dashboard"
              className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}