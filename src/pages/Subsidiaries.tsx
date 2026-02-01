import Layout from '@/components/Layout';
import SubsidiaryCard from '@/components/SubsidiaryCard';
import { Plus, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import skawshLogo from '@/assets/skawsh-logo.png';

const Subsidiaries = () => {
  const subsidiaries = [
    {
      name: "Skawsh",
      description: "A cutting-edge technology company specializing in innovative digital solutions, platform development, and transformative business applications that drive industry evolution.",
      logo: skawshLogo,
      website: "https://skawsh.com",
      featured: true
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-hero-gradient text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
            Our Portfolio
          </h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Discover the innovative subsidiaries that form the backbone of our strategic portfolio, 
            each excelling in their respective markets and driving industry transformation.
          </p>
        </div>
      </section>

      {/* Featured Subsidiary */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              <span className="text-gradient">Featured</span> Subsidiary
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our flagship company leading innovation in technology solutions.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <SubsidiaryCard
              name={subsidiaries[0].name}
              description={subsidiaries[0].description}
              logo={subsidiaries[0].logo}
              website={subsidiaries[0].website}
              delay="0.2s"
            />
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Investment Philosophy
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At CSWISHLINK, we believe in identifying and nurturing companies with 
                exceptional potential for growth and innovation. Our strategic approach 
                focuses on long-term value creation and sustainable development.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Strategic alignment with market trends and future opportunities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Strong leadership teams with proven track records</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Commitment to innovation and continuous improvement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Sustainable business practices and social responsibility</span>
                </li>
              </ul>
            </div>
            
            <div className="corporate-card p-8 text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Building2 className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Strategic Portfolio</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our carefully curated portfolio represents our commitment to excellence 
                and our vision for the future of business innovation.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1+</div>
                  <div className="text-sm text-muted-foreground">Active Subsidiaries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Opportunities */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Future <span className="text-gradient">Growth</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              We're always exploring new opportunities to expand our portfolio with 
              innovative companies that align with our vision and values.
            </p>
            
            <div className="corporate-card p-12 max-w-2xl mx-auto">
              <Plus className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Partnership Opportunities
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Interested in joining our portfolio? We're seeking exceptional companies 
                with innovative solutions and strong growth potential.
              </p>
              <Link to="/contact">
                <Button size="lg" className="hero-gradient text-primary-foreground hover-glow px-8">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Subsidiaries;