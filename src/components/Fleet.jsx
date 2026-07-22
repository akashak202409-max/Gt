import { Users, Fuel, Snowflake, CheckCircle2 } from 'lucide-react';
import './Fleet.css';

const fleetData = [
  {
    id: 1,
    name: 'Premium SUV',
    image: '/assets/Suv1.png',
    type: 'SUV',
    fuel: 'Diesel / Petrol',
    seats: '6+1',
    ac: 'Yes',
    price: 4000,
    priceSubtext: 'Local / 12hr',
    features: [
      'Local Travel: Rs. 4000 for 12hr',
      'Local Driver: Rs. 500/day',
      'Out Station: Rs. 20/Km (Toll/Permit Extra)',
      'Out Station Driver: Rs. 600/day'
    ],
    isPopular: false
  },
  {
    id: 2,
    name: 'Luxury Sedan',
    image: '/assets/Sedan1.png',
    type: 'Sedan',
    fuel: 'Petrol',
    seats: '4+1',
    ac: 'Yes',
    price: 3500,
    priceSubtext: 'Local / 12hr',
    features: [
      'Local Travel: Rs. 3500 for 12hr',
      'Local Driver: Rs. 500/day',
      'Out Station: Rs. 15/Km',
      'Out Station Driver: Rs. 600/day'
    ],
    isPopular: true
  }
];

const Fleet = () => {
  return (
    <section id="fleet" className="section fleet-section">
      <div className="container">
        <div className="fleet-header text-center animate-fade-up">
          <h2 className="section-title">Our Premium Fleet & Pricing</h2>
          <p className="section-subtitle">
            Choose the perfect vehicle for your journey with transparent rental pricing and no hidden charges.
          </p>
        </div>

        <div className="fleet-showcase">
          {fleetData.map((car, index) => (
            <div 
              key={car.id} 
              className={`fleet-row animate-fade-up ${index % 2 !== 0 ? 'reverse' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="fleet-row-image">
                <div className="image-backdrop"></div>
                {car.isPopular && <div className="popular-badge-new">Best Choice</div>}
                <div className="fleet-badge-new">{car.type}</div>
                <img src={car.image} alt={car.name} loading="lazy" className={`car-${car.type.toLowerCase()}`} />
              </div>
              
              <div className="fleet-row-content">
                <h3 className="fleet-name-new">{car.name}</h3>
                


                <div className="fleet-pricing-box">
                  <ul className="plan-features-new">
                    {car.features.map((feature, i) => (
                      <li key={i}>
                        <CheckCircle2 size={18} className="text-success" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="book-btn-wrapper">
                    <a href="#contact" className="btn btn-primary w-full text-center">Book {car.type}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
