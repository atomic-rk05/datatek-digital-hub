import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">DATATEK</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted technology partner for over 20 years. We provide comprehensive 
              technology solutions including photocopiers, computers, laptops, network maintenance, 
              and office automation services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>info@datatek.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>123 Business District, City</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-smooth">
                  Photocopiers & Printers
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-smooth">
                  Computers & Workstations
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-smooth">
                  Laptops & Mobile Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-smooth">
                  Network Maintenance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-smooth">
                  Office Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#home" className="hover:text-primary-foreground transition-smooth">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-smooth">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-foreground transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-smooth">
                  Contact
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-smooth">
                  Get Quote
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <Card className="bg-primary-light/10 border-primary-foreground/20">
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <p className="text-primary-foreground/80 mb-4 md:mb-0">
                © {currentYear} DATATEK. All rights reserved. Empowering businesses through technology.
              </p>
              <div className="flex space-x-6 text-sm text-primary-foreground/80">
                <a href="#" className="hover:text-primary-foreground transition-smooth">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary-foreground transition-smooth">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-primary-foreground transition-smooth">
                  Support
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </footer>
  )
}

export default Footer