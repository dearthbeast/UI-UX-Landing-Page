import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "IT Director",
    company: "TechCorp Solutions",
    content:
      "Servicehive revolutionized our IT service management. Incident resolution time decreased by 65% and our team efficiency improved dramatically. The platform is intuitive and powerful.",
    rating: 5,
    initials: "SC",
  },
  {
    name: "Michael Rodriguez",
    role: "Operations Manager",
    company: "Global Logistics Inc",
    content:
      "Our customer service operations were transformed. We handle 3x more tickets with the same team size. The automation features and analytics give us unprecedented visibility.",
    rating: 5,
    initials: "MR",
  },
  {
    name: "Emily Thompson",
    role: "Service Delivery Manager",
    company: "Enterprise Solutions",
    content:
      "The field service management capabilities are outstanding. Our technicians are more productive, customers are happier, and our first-time fix rate increased by 40%.",
    rating: 5,
    initials: "ET",
  },
];

const trustLogos = [
  "Microsoft",
  "Amazon",
  "Salesforce",
  "ServiceNow",
  "Zendesk",
  "Atlassian",
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 lg:py-24 bg-muted/30"
    >
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Success Stories & Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how organizations worldwide are streamlining their service operations 
            and achieving exceptional results with Servicehive.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 bg-background shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ),
                    )}
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                    <p className="text-muted-foreground leading-relaxed pl-6">
                      "{testimonial.content}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-border">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-blue-700 text-primary-foreground">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role},{" "}
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Logos */}
        <div className="text-center space-y-8">
          <h3 className="text-xl font-semibold text-foreground">
            Trusted by 1000+ service organizations worldwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {trustLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-12 text-lg font-semibold text-muted-foreground hover:opacity-100 transition-opacity"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              1000+
            </div>
            <div className="text-muted-foreground">
              Active Clients
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              99.9%
            </div>
            <div className="text-muted-foreground">
              Uptime SLA
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              10M+
            </div>
            <div className="text-muted-foreground">
              Tickets Processed
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              65%
            </div>
            <div className="text-muted-foreground">
              Faster Resolution
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}