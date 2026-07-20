import { CarFront, Send, PhoneCall, MapPin } from 'lucide-react';
import './Process.css';

const processSteps = [
  {
    id: 1,
    icon: <CarFront size={28} />,
    title: 'Choose Vehicle',
    description: 'Select the perfect car for your trip from our premium fleet.'
  },
  {
    id: 2,
    icon: <Send size={28} />,
    title: 'Submit Enquiry',
    description: 'Fill out a simple form or WhatsApp us with your travel details.'
  },
  {
    id: 3,
    icon: <PhoneCall size={28} />,
    title: 'Confirmation Call',
    description: 'Our team will call you to confirm availability and finalize the booking.'
  },
  {
    id: 4,
    icon: <MapPin size={28} />,
    title: 'Enjoy Your Ride',
    description: 'Our professional driver will arrive on time for a comfortable journey.'
  }
];

const Process = () => {
  return (
    <section className="section process-section">
      <div className="container">
        <div className="process-header text-center animate-fade-up">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Booking a premium ride with us is quick, easy, and hassle-free.
          </p>
        </div>

        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <div 
              key={step.id} 
              className="process-step animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="step-icon">
                {step.icon}
                <div className="step-number">{step.id}</div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              
              {/* Timeline Connector */}
              {index < processSteps.length - 1 && (
                <div className="step-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
