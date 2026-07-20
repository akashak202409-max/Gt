import { CheckCircle2, ShieldCheck, Award, ThumbsUp } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          
          {/* Left: Image */}
          <div className="about-image-wrapper animate-fade-up">
            <img 
              src="/assets/indian_cab_driver.jpg" 
              alt="Professional driver" 
              className="about-image"
              loading="lazy"
            />
            
            <div className="experience-badge animate-float">
              <span className="years">10+</span>
              <span className="text">Years of<br/>Experience</span>
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="about-content animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="section-title text-left">About Gokul Tours & Travels</h2>
            <p className="about-description">
              We are a premier travel agency dedicated to providing safe, comfortable, and reliable transportation across India. From local travel in Chennai to outstation trips with complete hotel bookings, our experienced team ensures a seamless journey. We are a proud MSME Certified business with a specialized fleet of Sedans and SUVs.
            </p>
            
            <div className="about-features">
              <div className="about-feature-item">
                <CheckCircle2 size={24} className="text-primary" />
                <span>All Over India Travel</span>
              </div>
              <div className="about-feature-item">
                <CheckCircle2 size={24} className="text-primary" />
                <span>Hotel Bookings Included</span>
              </div>
              <div className="about-feature-item">
                <CheckCircle2 size={24} className="text-primary" />
                <span>MSME Certified</span>
              </div>
              <div className="about-feature-item">
                <CheckCircle2 size={24} className="text-primary" />
                <span>Expert Drivers</span>
              </div>
            </div>
            
            <div className="trust-badges">
              <div className="trust-badge">
                <ShieldCheck size={32} />
                <span>Verified</span>
              </div>
              <div className="trust-badge">
                <Award size={32} />
                <span>Top Rated</span>
              </div>
              <div className="trust-badge">
                <ThumbsUp size={32} />
                <span>Trusted</span>
              </div>
            </div>
            
            <a href="#contact" className="btn btn-primary mt-4">
              Get in Touch
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
