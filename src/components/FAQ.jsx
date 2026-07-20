import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqData = [
  {
    id: 1,
    question: 'How can I book a cab?',
    answer: 'You can easily book a cab by filling out the enquiry form in the Contact section, or by clicking the WhatsApp button to chat directly with our team.'
  },
  {
    id: 2,
    question: 'Is a driver available with all vehicles?',
    answer: 'Yes, we provide professional, verified, and experienced chauffeurs with all our rental vehicles to ensure a safe and comfortable journey.'
  },
  {
    id: 3,
    question: 'Can I rent a car for just one day?',
    answer: 'Absolutely. We offer flexible rental plans, including daily rentals, weekly packages, and customized plans for outstation trips.'
  },
  {
    id: 4,
    question: 'Do you provide airport pickup and drop services?',
    answer: 'Yes, we specialize in punctual airport transfers. Just provide us with your flight details, and our driver will be there on time.'
  },
  {
    id: 5,
    question: 'What documents are required for booking?',
    answer: 'For a standard booking with a driver, we just need your basic contact details and pickup/drop locations. No extensive documentation is required.'
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section faq-section">
      <div className="container">
        <div className="faq-header text-center animate-fade-up">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about our car rental services.
          </p>
        </div>

        <div className="faq-container animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className={`faq-item ${openId === faq.id ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={openId === faq.id}
              >
                {faq.question}
                <ChevronDown size={20} className="faq-icon" />
              </button>
              
              <div 
                className="faq-answer-wrapper"
                style={{ 
                  maxHeight: openId === faq.id ? '200px' : '0',
                  opacity: openId === faq.id ? 1 : 0
                }}
              >
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
