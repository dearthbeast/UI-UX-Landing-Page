import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Essential",
    price: "$49",
    period: "/month",
    description: "Perfect for small teams starting with service management",
    features: [
      "Up to 5 agents",
      "1,000 tickets/month",
      "Email & chat support",
      "Basic reporting",
      "Knowledge base",
      "Mobile app access"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    description: "Ideal for growing teams with advanced service needs",
    features: [
      "Up to 25 agents",
      "10,000 tickets/month",
      "Priority phone support",
      "Advanced analytics",
      "Workflow automation",
      "API integrations",
      "SLA management",
      "Custom fields"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large service organizations",
    features: [
      "Unlimited agents",
      "Unlimited tickets",
      "24/7 dedicated support",
      "Custom dashboard development",
      "Advanced integrations",
      "On-premise deployment",
      "Enterprise security",
      "Dedicated account manager",
      "Custom training"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export function Pricing() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Simple, Scalable Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that matches your team size and service requirements. 
            Start with a free trial and scale as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'border-border shadow-md hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-blue-700 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full mt-8" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  onClick={() => scrollToSection('demo')}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            All plans include a 30-day free trial. No credit card required.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-primary" />
              <span>24/7 support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-primary" />
              <span>SOC 2 compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}