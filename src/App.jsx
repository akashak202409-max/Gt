import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Fleet from './components/Fleet';

import Process from './components/Process';
import About from './components/About';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Simple intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    const animatedElements = document.querySelectorAll('.animate-fade-up');
    
    // Pause all animations initially and add them to observer
    animatedElements.forEach(el => {
      el.style.animationPlayState = 'paused';
      el.style.opacity = '0';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Fleet />

        <Process />
        <About />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
