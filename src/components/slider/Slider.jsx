import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { slides } from './Slides'; 

const Slideshow = () => {
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
