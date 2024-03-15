import React, { useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { slides } from './Slides'; 

const Slideshow = () => {
 useEffect(() => {
    // Function to apply custom styles to the navigation buttons
    const applyCustomStyles = () => {
      const prevButton = document.querySelector('.nav-button-prev');
      const nextButton = document.querySelector('.nav-button-next');

      if (prevButton) {
        prevButton.style.position = 'absolute';
        prevButton.style.top = '50%';
        prevButton.style.left = '10px';
        prevButton.style.transform = 'translateY(-50%)';
        prevButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        prevButton.style.borderRadius = '50%';
        prevButton.style.width = '40px';
        prevButton.style.height = '40px';
        prevButton.style.display = 'flex';
        prevButton.style.justifyContent = 'center';
        prevButton.style.alignItems = 'center';
        prevButton.style.color = 'rgb(0, 0, 0)';
        prevButton.style.fontSize = '24px';
        prevButton.style.cursor = 'pointer';
        prevButton.style.backgroundImage = 'none';
        // Add custom styles for the arrow
        prevButton.innerHTML = '<div style="border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-right: 10px solid white; position: absolute; left: 50%; transform: translateX(-50%);"></div>';
      }

      if (nextButton) {
        nextButton.style.position = 'absolute';
        nextButton.style.top = '50%';
        nextButton.style.right = '10px';
        nextButton.style.transform = 'translateY(-50%)';
        nextButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        nextButton.style.borderRadius = '50%';
        nextButton.style.width = '40px';
        nextButton.style.height = '40px';
        nextButton.style.display = 'flex';
        nextButton.style.justifyContent = 'center';
        nextButton.style.alignItems = 'center';
        nextButton.style.color = 'rgb(0, 0, 0)';
        nextButton.style.fontSize = '24px';
        nextButton.style.cursor = 'pointer';
        nextButton.style.backgroundImage = 'none';
        // Add custom styles for the arrow
        nextButton.innerHTML = '<div style="border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-left: 10px solid white; position: absolute; right: 50%; transform: translateX(50%);"></div>';
      }
    };

    // Apply custom styles after the component has mounted
    applyCustomStyles();
 }, []);

 return (
    <div style={{ paddingTop: '80px' }}>
      <div className="slide-container">
        <Slide easing="ease" duration={500}>
          {slides.map((slide, index) => (
            <div key={index} className="each-slide">
              <div style={{ backgroundImage: `url(${slide.image})`, height: '400px', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
                <span>{slide.alt}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
 );
};

export default Slideshow;
