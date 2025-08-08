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
          
    </section>
  )
import React, { useState } from 'react';
import { Send, Check, AlertCircle, Loader2 } from 'lucide-react';

const ContactForm = () => {
  // Replace with your actual Google Apps Script Web App URL
  const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    serviceInterest: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '', visible: false });
  const [errors, setErrors] = useState({});

  const serviceOptions = [
    'Photocopiers & Printers',
    'Computers & Workstations',
    'Laptops & Mobile Solutions',
    'Network Maintenance',
    'Office Automation',
    'Complete IT Solutions'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ['firstName', 'lastName', 'email', 'message'];

    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = true;
      }
    });

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showMessage = (type, text) => {
    setMessage({ type, text, visible: true });
    
    if (type === 'success') {
      setTimeout(() => {
        setMessage(prev => ({ ...prev, visible: false }));
      }, 5000);
    }
  };

  const hideMessage = () => {
    setMessage(prev => ({ ...prev, visible: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    hideMessage();

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        showMessage('success', 'Thank you! Your message has been sent successfully. Check your email for confirmation.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          serviceInterest: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showMessage('error', 'Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFieldBlur = (fieldName) => {
    const value = formData[fieldName].trim();
    
    if (!value) {
      setErrors(prev => ({ ...prev, [fieldName]: true }));
    } else if (fieldName === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors(prev => ({ ...prev, [fieldName]: true }));
      }
    }
  };

  return (
    <div className="bg-gray-50 p-4 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <div 
          className="shadow-lg rounded-lg overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05)'
          }}
        >
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Send Us a Message</h1>
          </div>
          
          <div className="p-6">
            {/* Success/Error Messages */}
            {message.visible && (
              <div 
                className={`mb-6 p-4 rounded-lg text-white ${
                  message.type === 'success' 
                    ? 'bg-gradient-to-r from-green-500 to-green-600' 
                    : 'bg-gradient-to-r from-red-500 to-red-600'
                }`}
              >
                <div className="flex items-center">
                  <div className="mr-3">
                    {message.type === 'success' ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                  </div>
                  <div>{message.text}</div>
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    onBlur={() => handleFieldBlur('firstName')}
                    placeholder="John"
                    className={`w-full px-3 py-2 border rounded-md bg-white text-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    onBlur={() => handleFieldBlur('lastName')}
                    placeholder="Doe"
                    className={`w-full px-3 py-2 border rounded-md bg-white text-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={() => handleFieldBlur('email')}
                  placeholder="john@company.com"
                  className={`w-full px-3 py-2 border rounded-md bg-white text-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your Company Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest
                </label>
                <select
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={() => handleFieldBlur('message')}
                  placeholder="Tell us about your technology needs..."
                  rows={4}
                  className={`w-full px-3 py-2 border rounded-md bg-white text-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className={`w-full text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group ${
                  isLoading 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:-translate-y-0.5 hover:shadow-lg'
                }`}
                style={{
                  background: isLoading 
                    ? 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)'
                    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.target.style.background = 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoading) {
                    e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  }
                }}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

}

export default Contact
