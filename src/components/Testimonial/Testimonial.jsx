import React, { useState } from 'react';
import './Testimonial.css'; // Ensure you have a CSS file linked here for styling

const Testimonial = () => {
  const testimonials = [
    { text: "This is a great product!", author: "Customer 1" },
    { text: "I love this service!", author: "Customer 2" },
    { text: "Excellent customer support!", author: "Customer 3" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex > 0? prevIndex - 1 : testimonials.length - 1);
  };

  const goToNextTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex < testimonials.length - 1? prevIndex + 1 : 0);
  };

  return (
    <div className="testimonial">
      <h1>Testimonials</h1>
      <div className="testimonials-container">
        <button className="test-btn" onClick={goToPreviousTestimonial}>&lt;</button>
        <div className="testimonial-card">
          <p>{testimonials[currentIndex].text}</p>
          <p>- {testimonials[currentIndex].author}</p>
        </div>
        <button className="test-btn" onClick={goToNextTestimonial}>&gt;</button>
      </div>
    </div>
  );
};

export default Testimonial;
