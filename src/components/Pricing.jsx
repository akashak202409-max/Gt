import { Check } from 'lucide-react';
import './Pricing.css';

const pricingData = [
  {
    id: 1,
    name: 'Sedan Packages',
    price: 3500,
    priceSubtext: 'Local / 12hr',
    image: '/assets/sedan_cab.avif',
    features: [
      'Local Travel: Rs. 3500 for 12hr',
      'Local Driver: Rs. 500/day',
      'Out Station: Rs. 15/Km',
      'Out Station Driver: Rs. 600/day'
    ],
    isPopular: true
  },
  {
    id: 2,
    name: 'SUV Packages',
    price: 4000,
    priceSubtext: 'Local / 12hr',
    image: '/assets/suv_cab.png',
    features: [
      'Local Travel: Rs. 4000 for 12hr',
      'Local Driver: Rs. 500/day',
      'Out Station: Rs. 20/Km (Toll/Permit Extra)',
      'Out Station Driver: Rs. 600/day'
    ],
    isPopular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <div className="pricing-header text-center animate-fade-up">
          <h2 className="section-title">Transparent Rental Pricing</h2>
          <p className="section-subtitle">
            Choose the best plan for your needs with no hidden charges.
          </p>
        </div>

        <div className="pricing-grid">
          {pricingData.map((plan, index) => (
            <div 
              key={plan.id} 
              className={`pricing-card-wrapper animate-fade-up ${plan.isPopular ? 'popular' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.isPopular && <div className="popular-badge">Best Choice</div>}
              
              <div className="pricing-card-inner">
                <div className="pricing-car-image">
                  <img src={plan.image} alt={plan.name} loading="lazy" />
                </div>
                
                <h3 className="plan-name">{plan.name}</h3>
                
                <div className="plan-price">
                  <span className="amount">₹{plan.price}</span>
                  <span className="duration">
                    {plan.priceSubtext ? plan.priceSubtext : '/day'}
                  </span>
                </div>
                
                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <Check size={18} className="text-success" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact" 
                  className={`btn w-full ${plan.isPopular ? 'btn-primary' : 'btn-secondary'}`}
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
