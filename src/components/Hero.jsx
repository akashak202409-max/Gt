import { Star, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements['hero-name'].value;
    const phone = e.target.elements['hero-phone'].value;
    const location = e.target.elements['hero-location'].value;
    const date = e.target.elements['hero-date'].value;
    const vehicle = e.target.elements['hero-vehicle'].value;
    
    const message = `*New Booking Enquiry*\n\nName: ${name}\nPhone: ${phone}\nPickup Location: ${location}\nDate: ${date}\nVehicle Type: ${vehicle}`;
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/916381455272?text=${encodedMessage}`;
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      
      <div className="container hero-container">
        <div className="hero-content animate-fade-up">
          <div className="badge">
            <ShieldCheck size={16} className="badge-icon" />
            <span>Gokul Tours & Travels</span>
          </div>
          
          <h1 className="hero-title">
            Your Trusted <br/>
            <span className="text-accent">T Board Taxi Service</span>
          </h1>
          
          <p className="hero-description" style={{ marginBottom: '16px' }}>
            We provide professional T Board tourist taxi services for local trips, outstation travel, airport pick-up and drop, corporate pick-up and drop, temple tours, and family vacations. Travel safely and comfortably with our experienced and professional drivers.
          </p>

          <div className="hero-highlights" style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 size={18} className="text-success" />
              <span style={{ fontSize: '15px', fontWeight: '500', color: 'rgba(255, 255, 255, 0.9)' }}>
                Chauffeur-Driven Tourist Taxi Services Across Tamil Nadu
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShieldCheck size={18} className="text-accent" />
              <span style={{ fontSize: '15px', fontWeight: '500', color: 'rgba(255, 255, 255, 0.9)' }}>
                Government Registered Tourist Vehicles & Professional Drivers
              </span>
            </div>
          </div>
          
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary btn-lg">
              Book Now
            </a>
            <a href="#fleet" className="btn btn-secondary btn-lg">
              View Fleet <ChevronRight size={18} />
            </a>
          </div>
          
          <div className="hero-trust">
            <div className="trust-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="var(--accent)" color="var(--accent)" />
              ))}
            </div>
            <div className="trust-text">
              <strong>4.9 Google Rating</strong>
              <span>500+ Happy Customers</span>
            </div>
          </div>
        </div>

        <div className="hero-visual animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="glass-card form-card animate-float-slow">
            <h3 className="hero-form-title">Send us an Enquiry</h3>
            <form className="hero-form" onSubmit={handleWhatsAppSubmit}>
              <div className="form-group-hero">
                <input type="text" id="hero-name" placeholder="Full Name" required />
              </div>
              <div className="form-group-hero">
                <input type="tel" id="hero-phone" placeholder="Phone Number" required />
              </div>
              <div className="form-group-hero">
                <input type="text" id="hero-location" placeholder="Pickup Location" required />
              </div>
              <div className="form-row-hero">
                <div className="form-group-hero">
                  <input type="date" id="hero-date" required />
                </div>
                <div className="form-group-hero">
                  <select id="hero-vehicle" defaultValue="" required>
                    <option value="" disabled>Vehicle Type</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-full btn-hero-submit">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
