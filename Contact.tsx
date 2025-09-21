import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll get back to you within 24 hours.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Start Your Service Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to streamline your service operations? Contact us for a personalized 
            consultation and see how Servicehive can transform your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-0 bg-background shadow-lg">
            <CardHeader>
              <h3 id="demo" className="text-2xl font-bold text-foreground">Request a Demo</h3>
              <p className="text-muted-foreground">
                Fill out the form below and we'll schedule a personalized demo for your team.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Your Company"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Primary Interest</Label>
                  <Select onValueChange={(value) => handleInputChange("interest", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your main area of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="customer-support">Customer Support</SelectItem>
                      <SelectItem value="it-service">IT Service Management</SelectItem>
                      <SelectItem value="field-service">Field Service Management</SelectItem>
                      <SelectItem value="automation">Business Process Automation</SelectItem>
                      <SelectItem value="all">All Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your service challenges</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Describe your current service operations and what you'd like to improve..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Schedule Demo
                  <Calendar className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to receive communications from Servicehive. 
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 bg-gradient-to-br from-primary to-blue-700 text-primary-foreground shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Why Choose Servicehive?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold">Rapid Implementation</div>
                      <div className="text-primary-foreground/80">Get up and running in days, not months. Our experts ensure seamless integration with your existing tools.</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold">Proven ROI</div>
                      <div className="text-primary-foreground/80">Our clients see 65% faster resolution times and 40% reduction in operational costs within 90 days.</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold">World-Class Support</div>
                      <div className="text-primary-foreground/80">24/7 expert support, comprehensive training, and ongoing optimization to maximize your success.</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">hello@servicehive.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Office</div>
                    <div className="text-muted-foreground">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}