import { Button } from "@/components/ui/enhanced-button"
import { ArrowRight, Phone } from "lucide-react"
import heroImage from "@/assets/hero-office.jpg"

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern office with technology equipment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-light/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Your Complete
            <span className="block bg-gradient-to-r from-primary-glow to-primary-foreground bg-clip-text text-transparent">
              Tech Solution
            </span>
            Partner
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            DATATEK provides cutting-edge technology solutions for your business. 
            From photocopiers and computers to network maintenance and office automation, 
            we're your trusted technology partner.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="hero" className="group">
              Explore Our Services
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="hero" 
              className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20"
            >
              <Phone className="mr-2" />
              Contact Us
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-8 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
              <span>20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
              <span>500+ Satisfied Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero