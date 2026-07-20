import { Car, IndianRupee, UserCheck, Clock } from 'lucide-react';
import './Features.css';

const featuresData = [
  {
    id: 1,
    icon: <Car size={32} />,
    title: 'Luxury Vehicles',
    description: 'Travel in comfort with our well-maintained, premium fleet of cars suitable for every occasion.',
  },
  {
    id: 2,
    icon: <IndianRupee size={32} />,
    title: 'Affordable Pricing',
    description: 'Transparent pricing with no hidden charges. Get the best value for your journey.',
  },
  {
    id: 3,
    icon: <UserCheck size={32} />,
    title: 'Professional Drivers',
    description: 'Experienced, verified, and polite chauffeurs ensuring a safe and smooth ride.',
  },
  {
    id: 4,
    icon: <Clock size={32} />,
    title: '24×7 Support',
    description: 'Round-the-clock customer assistance to help you with bookings and ride-related queries.',
  }
];

const Features = () => {
  return (
    <section className="section features-section">
      <div className="container">
        <div className="features-header text-center animate-fade-up">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            We deliver the best car rental experience with premium service and complete reliability.
          </p>
        </div>
        
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div 
              key={feature.id} 
              className="feature-card animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
