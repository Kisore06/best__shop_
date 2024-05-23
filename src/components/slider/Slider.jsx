import React, { useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { slides } from './Slides'; // Ensure this path is correct
import './Slider.css'; // Ensure this CSS file is imported

const Slideshow = () => {
  useEffect(() => {
    // Function to apply custom styles to the navigation buttons
    const applyCustomStyles = () => {
      // Selecting the navigation buttons and applying custom styles
      const nextButton = document.querySelector('.next');
      const prevButton = document.querySelector('.prev');

      if (nextButton && prevButton) {
        // Add your custom styles here, for example:
        nextButton.style.backgroundColor = 'blue';
        prevButton.style.backgroundColor = 'red';
        // You can adjust styles as per your requirement
      }
    };
    applyCustomStyles();
  }, []);

  return (
    <div style={{ paddingTop: '70px'}} className="slideshow-container">
      <Slide easing="ease" duration={3500}>
        {slides.map((slide, index) => (
          <div key={index} className="each-slide">
            <a href={slide.link} rel="noopener noreferrer">
              <div className="slide-content" style={{ backgroundImage:`url(${slide.image})` }}>
                <span className="overlay-text">{slide.alt}</span>
              </div>
            </a>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;