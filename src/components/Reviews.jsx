import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import './Reviews.css';

const reviewsData = [
  {
    id: 1,
    name: 'Rahul Sharma',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150',
    review: 'Excellent service! The car was in pristine condition, and the driver was very professional and punctual. Highly recommended for outstation trips.'
  },
  {
    id: 2,
    name: 'Priya Patel',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    review: 'Booked an Innova for a family trip. The booking process was seamless, transparent pricing, and we had a very comfortable journey.'
  },
  {
    id: 3,
    name: 'Vikram Singh',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    review: 'Best car rental service in the city. Their 24/7 support is actually responsive. Used their service for airport transfer and it was perfect.'
  },
  {
    id: 4,
    name: 'Anita Desai',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
    review: 'Very affordable compared to other luxury cab services. The chauffeur was well-mannered and the car was extremely clean.'
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section reviews-section">
      <div className="container">
        <div className="reviews-header text-center animate-fade-up">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Read what our happy customers have to say.
          </p>
        </div>

        <div className="carousel-container animate-fade-up">
          <div 
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviewsData.map((review) => (
              <div key={review.id} className="carousel-slide">
                <div className="review-card">
                  <Quote size={48} className="quote-icon" />
                  
                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="#F97316" color="#F97316" />
                    ))}
                  </div>
                  
                  <p className="review-text">"{review.review}"</p>
                  
                  <div className="reviewer-info">
                    <h4 className="reviewer-name">{review.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="carousel-dots">
            {reviewsData.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
