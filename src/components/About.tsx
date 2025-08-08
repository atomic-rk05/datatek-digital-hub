import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Award, 
  Users, 
  Shield, 
  Clock,
  CheckCircle 
} from "lucide-react"

const About = () => {
  const stats = [
    { icon: Users, label: "Satisfied Clients", value: "500+" },
    { icon: Clock, label: "Years Experience", value: "20+" },
    { icon: Award, label: "Certifications", value: "15+" },
    { icon: Shield, label: "Success Rate", value: "99%" }
  ]

  const values = [
    "Quality Assurance",
    "Customer First",
    "Innovation",
    "Reliability",
    "Professional Service",
    "Competitive Pricing"
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About DATATEK
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A trusted technology partner dedicated to providing comprehensive solutions 
            that empower businesses to achieve their goals through cutting-edge technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Company Story */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Your Technology Success Partner
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                DATATEK has been at the forefront of business technology solutions for over two decades. 
                As a proprietorship company, we pride ourselves on providing personalized service and 
                building lasting relationships with our clients.
              </p>
              <p>
                From small startups to large enterprises, we understand that every business has unique 
                technology needs. Our comprehensive range of services covers everything from hardware 
                supply to complete IT infrastructure management.
              </p>
              <p>
                What sets us apart is our commitment to understanding your business first, then 
                recommending technology solutions that drive real results. We don't just sell products – 
                we build partnerships.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">Our Core Values</h4>
              <div className="flex flex-wrap gap-2">
                {values.map((value, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    <CheckCircle className="w-3 h-3 mr-1 text-primary" />
                    {value}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-card shadow-card hover:shadow-professional transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="bg-gradient-hero text-primary-foreground shadow-glow">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto text-primary-foreground/90">
              To empower businesses with reliable, innovative technology solutions that enhance productivity, 
              reduce costs, and drive growth. We are committed to being more than just a supplier – 
              we are your strategic technology partner for long-term success.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default About