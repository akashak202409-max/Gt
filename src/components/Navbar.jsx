import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Fleet & Pricing', href: '#fleet' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled glass' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="logo">
          <img src="/assets/logo.jpeg" alt="Logo" className="navbar-logo-img" />
        </a>

        {/* Desktop Nav */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        <div className="nav-actions desktop-only">
          <a href="#contact" className="btn btn-primary">Book Now</a>
          <a href="https://wa.me/916381455272" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
            <Phone size={18} />
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu glass ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="mobile-nav-actions">
          <a href="#contact" className="btn btn-primary w-full" onClick={() => setMobileMenuOpen(false)}>Book Now</a>
          <a href="https://wa.me/916381455272" target="_blank" rel="noreferrer" className="btn btn-whatsapp w-full">
            <Phone size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
