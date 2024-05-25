import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.css';

const Testimonial = () => {
  const testimonials = [
    { text: "This is a great product!", author: "Customer 1" },
    { text: "I love this service!", author: "Customer 2" },
    { text: "Excellent customer support!", author: "Customer 3" },
  ];

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  // Custom Next Arrow
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{...style, display: "block", color: "black" }}
        onClick={onClick}
      />
    );
  }

  // Custom Prev Arrow
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{...style, display: "block", color: "black" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="testimonial">
      <h1>Testimonials</h1>
      <div className="testimonials-container">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p>{testimonial.text}</p>
              <p>- {testimonial.author}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
