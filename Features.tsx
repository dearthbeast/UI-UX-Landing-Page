import { Users, Zap, Shield, BarChart3, Headphones, Cog } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Users,
    title: "Customer Management",
    description: "Centralized customer portal with complete service history, preferences, and communication tracking for personalized experiences."
  },
  {
    icon: Headphones,
    title: "Omnichannel Support",
    description: "Unified support across phone, email, chat, and social media with intelligent ticket routing and priority management."
  },
  {
    icon: Cog,
    title: "Workflow Automation",
    description: "Streamline service processes with customizable workflows, automated task assignments, and SLA monitoring."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Real-time dashboards and reporting with KPI tracking, trend analysis, and predictive insights for better decision making."
  },
  {
    icon: Zap,
    title: "Quick Resolution",
    description: "AI-powered ticket categorization and knowledge base suggestions for faster issue resolution and improved efficiency."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant platform with role-based access, data encryption, and comprehensive audit trails for peace of mind."
  }
];

export function Features() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Service Excellence Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to deliver exceptional customer service and streamline 
            your operations in one comprehensive platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 bg-background shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-700 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}