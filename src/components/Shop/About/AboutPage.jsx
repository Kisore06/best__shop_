import React from 'react';
import './AboutPage.css'; 
import { useNavigate } from "react-router-dom";
import best from "../../../Assets/best main 3.jpg"

const AboutPage = () => {
  const navigate = useNavigate();

  const goToShopLocations = () => {
    navigate('/shop-locations');
  };

  return (
    <div style={{   backgroundColor: '#f4f1ea ', paddingTop:'50px', paddingBottom:'50px' }}>
    <div id="About" className="main-content">
    <div className="image-and-content-container">
    <img src={best} alt="Best shop Main branch" className="about-page-image" />
    <div className="flex-content-container">
      <div className="content-section">
        <h2 style={{textAlign:'center'}}>"Welcome to Best Shop, Your Trusted Destination for </h2>
        <h2 style={{textAlign:'center'}}>Quality and Variety!"</h2>
        <p>
        At Best Shop, we believe in the power of exceptional products to enhance everyday life. Founded in 1993, We set out with a simple mission : to provide a curated selection of high-quality goods across multiple categories, all in one convenient location.        </p>
      </div>
      <div className="content-section sec-button">
      <h1 style={{marginBottom:'30px'}}>"Explore, Discover, and Experience"</h1>
      <button onClick={goToShopLocations} className="shop-button">STOP ON BY</button>
      </div>
      <div className="content-section">
        <h2>Our Story</h2>
        <p>
        Established over three decades ago, Best shop has been proudly serving the communities of Sathyamangalam and Gobi with a commitment to excellence and a passion for providing an unparalleled shopping experience. With a legacy spanning over 30 years, we have become synonymous with quality, reliability, and customer satisfaction.we have solidified our presence in the industry through four meticulously organized retail stores and a thriving institutional business, powered by a dedicated team of 40 skilled members.        
        </p>
      </div>
      </div>
      </div>
      <div className="content-section">
        <h2>A Commitment to Quality</h2>
        <p>
        At Best shop, we understand that our customers deserve nothing but the best, which is why we've curated a diverse collection of products to cater to every need and preference. From fashionable footwear to cutting-edge mobile technology, from elegant watches to practical bags and luggage, from premium cosmetics and perfumes to thoughtful gifts and decorative wall clocks, our shelves are stocked with an extensive range of items to fulfill your every desire.        
        </p>
        <p>
        Our dedication to offering top-notch products extends beyond mere variety; we also prioritize quality and affordability. Each item in our store undergoes rigorous scrutiny to ensure that it meets our stringent standards, allowing you to shop with confidence and peace of mind.
        </p>
      </div>
      <div className="content-section">
        <h2>Guaranteed Customer Satisfaction </h2>
        <p>
          Our dedication to customer satisfaction starts the moment you walk through our doors. From our warm and welcoming atmosphere to our attentive staff who are always ready to assist you, we strive to make every visit to Best shop an enjoyable and fulfilling experience.        
        </p>
        <p>
        But our commitment doesn't stop there. We stand behind every product that we sell, offering a satisfaction guarantee that gives you peace of mind with every purchase. If for any reason you're not completely satisfied with your item, simply let us know, and we'll do whatever it takes to make it right.
        </p>
        <p>
        Whether it's exchanging a product, or offering personalized assistance to address your concerns, our goal is to ensure that you leave our store feeling delighted with your experience. Your happiness is our priority, and we'll go above and beyond to exceed your expectations.
        </p>
        <p>
        At Best shop, we believe that true success is measured not only by sales figures but by the smiles on our customers' faces. That's why we're dedicated to making your satisfaction our number one priority. Come experience the difference for yourself and discover why Best shop is the trusted choice for all your shopping needs.
        </p>
      </div>
      {/* <div className="content-section">
        <h2>Join Our Community</h2>
        <p>
          We invite you to join our community of like-minded individuals who share a passion for quality, craftsmanship, and style. Follow us on social media [@YourStoreName] for the latest updates, behind-the-scenes glimpses, and exclusive promotions. Sign up for our newsletter to stay informed about new arrivals, special offers, and more.
        </p>
      </div>
      <div className="content-section">
        <h2>Contact Us</h2>
        <p>
          Have a question or feedback? We'd love to hear from you! Feel free to reach out to us at [Your Email Address] or give us a call at [Your Phone Number]. You can also visit us in person at [Your Physical Address], where our knowledgeable team will be happy to assist you.
        </p>
      </div> */}
    </div>
    </div>
  );
};

export default AboutPage;