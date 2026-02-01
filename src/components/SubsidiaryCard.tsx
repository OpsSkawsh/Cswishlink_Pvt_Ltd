import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface SubsidiaryCardProps {
  name: string;
  description: string;
  logo: string;
  website?: string;
  delay?: string;
}

const SubsidiaryCard = ({ name, description, logo, website, delay = '0s' }: SubsidiaryCardProps) => {
  return (
    <div 
      className="corporate-card p-8 hover-lift animate-fade-up"
      style={{ animationDelay: delay }}
    >
      <div className="flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-6">
          <img 
            src={logo} 
            alt={`${name} logo`} 
            className="h-16 w-16 object-contain"
          />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-foreground mb-4">{name}</h3>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          {description}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Button 
            variant="default" 
            className="flex-1 hover-glow"
            onClick={() => website && window.open(website, '_blank')}
          >
            Visit Website
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <Link to="/subsidiaries" className="flex-1">
            <Button 
              variant="outline" 
              className="w-full hover-lift"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubsidiaryCard;