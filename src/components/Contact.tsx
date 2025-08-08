import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/enhanced-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send 
} from "lucide-react"

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      subtitle: "Call us anytime"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@datatek.com",
      subtitle: "24/7 email support"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "123 Business District",
      subtitle: "Visit our office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 9AM-6PM",
      subtitle: "Weekend support available"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-tech">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business technology? Contact us today for a free consultation 
            and discover how DATATEK can help your business thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Let's Start the Conversation
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gradient-card shadow-card hover:shadow-professional transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-primary font-medium">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Why Choose Us */}
            <Card className="bg-gradient-hero text-primary-foreground shadow-glow">
              <CardHeader>
                <CardTitle className="text-2xl">Why Choose DATATEK?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                  <span>Free consultation and needs assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                  <span>Competitive pricing and flexible payment options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                  <span>Comprehensive warranty and support services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                  <span>Proven track record with 500+ satisfied clients</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
 <Card className="bg-gradient-card shadow-professional">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="John" className="transition-smooth focus:shadow-card" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Doe" className="transition-smooth focus:shadow-card" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="john@company.com" 
                  className="transition-smooth focus:shadow-card"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Company
                </label>
                <Input placeholder="Your Company Name" className="transition-smooth focus:shadow-card" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Service Interest
                </label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground transition-smooth focus:shadow-card focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Select a service</option>
                  <option>Photocopiers & Printers</option>
                  <option>Computers & Workstations</option>
                  <option>Laptops & Mobile Solutions</option>
                  <option>Network Maintenance</option>
                  <option>Office Automation</option>
                  <option>Complete IT Solutions</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your technology needs..."
                  rows={4}
                  className="transition-smooth focus:shadow-card"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full group">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact
