import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/enhanced-button"
import { 
  Printer, 
  Laptop, 
  Monitor, 
  Wifi, 
  Settings, 
  ArrowRight 
} from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: Printer,
      title: "Photocopiers & Printers",
      description: "High-quality commercial photocopiers, multifunction printers, and document solutions for businesses of all sizes.",
      features: ["Commercial Grade Equipment", "Maintenance & Support", "Lease Options Available"]
    },
    {
      icon: Monitor,
      title: "Computers & Workstations",
      description: "Complete range of desktop computers, workstations, and custom-built systems tailored to your business needs.",
      features: ["Business Grade Hardware", "Custom Configurations", "Warranty & Support"]
    },
    {
      icon: Laptop,
      title: "Laptops & Mobile Solutions",
      description: "Professional laptops, tablets, and mobile computing solutions for modern workforce flexibility.",
      features: ["Enterprise Laptops", "Mobile Security", "Remote Work Solutions"]
    },
    {
      icon: Wifi,
      title: "Network Maintenance",
      description: "Comprehensive network setup, maintenance, and optimization services to keep your business connected.",
      features: ["Network Setup & Config", "24/7 Monitoring", "Security Implementation"]
    },
    {
      icon: Settings,
      title: "Office Automation",
      description: "Complete office automation solutions including software integration and workflow optimization.",
      features: ["Workflow Automation", "Software Integration", "Digital Transformation"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-tech">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Technology Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From hardware supply to complete technology services, we provide comprehensive solutions 
            that power your business operations and drive growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card shadow-card hover:shadow-professional transition-smooth hover:scale-105 border-border/50"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-hero text-primary-foreground shadow-glow max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Business Technology?
              </h3>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Get a free consultation and discover how DATATEK can optimize your technology infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20"
                >
                  Schedule Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20"
                >
                  Request Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Services