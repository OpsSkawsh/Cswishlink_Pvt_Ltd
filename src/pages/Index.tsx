import Hero from '@/components/Hero';
import SubsidiaryCard from '@/components/SubsidiaryCard';
import Layout from '@/components/Layout';
import { Building2, Shield, Lightbulb, Globe } from 'lucide-react';
import skawshLogo from '@/assets/skawsh-logo.png';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Company Overview */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              About <span className="text-gradient">CSWISHLINK</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              As a premier private limited company, CSWISHLINK stands at the forefront of corporate 
              innovation, fostering growth through strategic investments and exceptional subsidiaries 
              that drive industry transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="corporate-card p-6 text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Strategic Holdings</h3>
              <p className="text-muted-foreground">Carefully curated portfolio of innovative companies</p>
            </div>
            
            <div className="corporate-card p-6 text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Trusted Leadership</h3>
              <p className="text-muted-foreground">Experienced management driving sustainable growth</p>
            </div>
            
            <div className="corporate-card p-6 text-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Innovation Focus</h3>
              <p className="text-muted-foreground">Pioneering solutions for tomorrow's challenges</p>
            </div>
            
            <div className="corporate-card p-6 text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Global Reach</h3>
              <p className="text-muted-foreground">International partnerships and market presence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Subsidiary */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Subsidiaries</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the innovative companies that make up our diverse portfolio, 
              each leading in their respective industries.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <SubsidiaryCard
              name="Skawsh"
              description="Our flagship technology subsidiary, delivering cutting-edge digital solutions and innovative platforms that transform how businesses operate in the modern landscape."
              logo={skawshLogo}
              website="https://skawsh.com"
              delay="0.2s"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
