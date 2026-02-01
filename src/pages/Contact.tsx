import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-hero-gradient text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
            Contact Us
          </h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Ready to explore partnership opportunities or learn more about CSWISHLINK? 
            We'd love to hear from you and discuss how we can work together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="animate-fade-up">
              <h2 className="text-4xl font-bold text-foreground mb-8">Get in Touch</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you're an investor, potential partner, or have general inquiries, 
                our team is here to assist you. Reach out through any of the channels below.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <a href="mailto:cswishlink@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">cswishlink@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Phone</div>
                    <a href="tel:+918197739892" className="text-muted-foreground hover:text-primary transition-colors">+91 8197739892</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Address</div>
                    <div className="text-muted-foreground">
                      5-497, Near HITEC City,<br />
                      Izzathnagar, Kondapur,<br />
                      Hyderabad, Telangana 500084
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="corporate-card p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="Partnership Inquiry"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your inquiry..."
                      className="min-h-32"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full hero-gradient text-primary-foreground hover-glow"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">Visit Our Office</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Located in the heart of the business district, our office is easily accessible 
              and designed to foster collaboration and innovation.
            </p>
            
            <div className="corporate-card p-8 max-w-2xl mx-auto">
              <div className="w-full h-64 bg-muted/50 rounded-lg mb-6 flex items-center justify-center">
                <MapPin className="h-16 w-16 text-primary" />
                {/* In a real implementation, you would integrate Google Maps here */}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">CSWISHLINK Private Limited</h3>
              <p className="text-muted-foreground mb-4">
                5-497, Near HITEC City, Izzathnagar,<br />
                Kondapur, Hyderabad, Telangana 500084
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Kondapur+Hyderabad+Telangana+500084" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="hover-lift">
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;