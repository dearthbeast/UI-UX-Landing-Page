import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground text-lg font-bold">S</span>
            </div>
            <span className="text-xl font-bold text-foreground">Servicehive</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="ml-4"
            >
              Contact
            </Button>
            <Button onClick={() => scrollToSection('demo')}>
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('solutions')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Case Studies
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="w-full"
              >
                Contact
              </Button>
              <Button
                onClick={() => scrollToSection('demo')}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}