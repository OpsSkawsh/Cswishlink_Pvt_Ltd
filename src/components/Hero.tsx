import { ArrowRight, Building2, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Leading Corporate
            <span className="text-gradient block">Excellence</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            CSWISHLINK Private Limited drives innovation through strategic partnerships 
            and cutting-edge subsidiaries, delivering exceptional value to our stakeholders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/about">
              <Button 
                size="lg" 
                className="hero-gradient text-primary-foreground hover-glow px-8 py-4 text-lg font-semibold"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold hover-lift border-primary/20 hover:border-primary/40"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="corporate-card p-6 text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Premium Holdings</h3>
              <p className="text-muted-foreground">Strategic portfolio of innovative subsidiaries</p>
            </div>
            
            <div className="corporate-card p-6 text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Expert Leadership</h3>
              <p className="text-muted-foreground">Experienced professionals driving success</p>
            </div>
            
            <div className="corporate-card p-6 text-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Growth Focus</h3>
              <p className="text-muted-foreground">Sustainable expansion and innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;