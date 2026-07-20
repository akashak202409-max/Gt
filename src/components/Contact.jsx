import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements['name'].value;
    const phone = e.target.elements['phone'].value;
    const location = e.target.elements['location'].value;
    const date = e.target.elements['date'].value;
    const vehicle = e.target.elements['vehicle'].value;
    const msg = e.target.elements['message'].value;
    
    let message = `*New Booking Enquiry*\n\nName: ${name}\nPhone: ${phone}\nPickup Location: ${location}\nDate: ${date}\nVehicle Type: ${vehicle}`;
    if (msg) {
      message += `\nMessage: ${msg}`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/916381455272?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-header text-center animate-fade-up">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Have a question or ready to book your ride? We are here to help.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left: Contact Form */}
          <div className="contact-form-wrapper animate-fade-up">
            <h3 className="form-title">Send us an Enquiry</h3>
            <form className="contact-form" onSubmit={handleWhatsAppSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="+91 98765 43210" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="location">Pickup Location</label>
                <input type="text" id="location" placeholder="Enter pickup location" required />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Pickup Date</label>
                  <input type="date" id="date" required />
                </div>
                <div className="form-group">
                  <label htmlFor="vehicle">Vehicle Type</label>
                  <select id="vehicle" defaultValue="" required>
                    <option value="" disabled>Select a vehicle</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea id="message" rows="4" placeholder="Any specific requirements?"></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-submit w-full">
                Submit Enquiry
              </button>
            </form>
          </div>
          
          {/* Right: Company Details */}
          <div className="contact-details-wrapper animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="details-title">Contact Information</h3>
            
            <div className="contact-info-list">
              <div className="info-item">
                <div className="info-icon">
                  <Phone size={24} />
                </div>
                <div className="info-text">
                  <h4>Phone</h4>
                  <p>Call: +91 63814 55272 / +91 99401 75207</p>
                  <p>WhatsApp: +91 63814 55272</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={24} />
                </div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>gokultoursandtravelsofficial@gmail.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={24} />
                </div>
                <div className="info-text">
                  <h4>Office Address</h4>
                  <p>G1, 3b kambar street, selvam garden,<br/>Tambaram east, Chennai 59</p>
                  <p style={{ marginTop: '8px', fontSize: '14px' }}><strong>Prop:</strong> GOKULAKRISHNAN<br/><strong>GSTIN:</strong> 33ALXPG2105L1Z1</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <Clock size={24} />
                </div>
                <div className="info-text">
                  <h4>Working Hours</h4>
                  <p>24/7 Available for bookings and support.</p>
                </div>
              </div>
            </div>
            
            <div className="contact-actions">
              <a href="https://wa.me/916381455272" target="_blank" rel="noreferrer" className="btn btn-whatsapp w-full">
                <Phone size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
