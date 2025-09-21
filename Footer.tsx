import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground text-lg font-bold">S</span>
              </div>
              <span className="text-xl font-bold">Servicehive</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Streamlining service operations with intelligent automation and 
              comprehensive management solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Customer Support</a></li>
              <li><a href="#" className="hover:text-background transition-colors">IT Service Management</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Field Service Management</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Business Automation</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-background transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-background transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Status Page</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © 2024 Servicehive. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-background/60">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}