<<<<<<< HEAD
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Footer = () => {
 return (
=======

import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';


const Footer = () => {
  return (
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
    <footer className="footer">
      
      <div className="footer-links">
        <ul className="footer-links-list">
          <li><a href="#!">Link 1</a></li>
          <li><a href="#!">Link 2</a></li>
          <li><a href="#!">Link 3</a></li>
          <li><a href="#!">Link 4</a></li>
        </ul>
      </div>
<<<<<<< HEAD
      <div className="footer-about">
          <p>
            Best Shop is your one-stop destination for all your shopping needs. We offer a wide range of products from bags, watches, shoes, cosmetics, gifts, and more. Our mission is to provide high-quality products at affordable prices, ensuring a seamless shopping experience for our customers.
          </p>
        </div>
      <div className="footer-bottom">
        <div className="footer-social-icons">
          <a href='#!' className='footer-social-icon'>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href='#!' className='footer-social-icon'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href='#!' className='footer-social-icon'>
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href='#!' className='footer-social-icon'>
 <div className="icon-name">Instagram</div>
 <FontAwesomeIcon icon={faInstagram} />
</a>

          <a href='#!' className='footer-social-icon'>
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href='#!' className='footer-social-icon'>
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
        <hr />
        <p className="footer-text">
          © 2020 Copyright: <a className='text-white' href='https://example.com/'>YourWebsite.com</a>
        </p>
       
      </div>
    </footer>
 );
}

export default Footer;
=======
      
      <div className="footer-bottom">
      <div className="footer-social-icons">
  <a href='#!' className='footer-social-icon'>
    <FontAwesomeIcon icon={faFacebookF} />
  </a>
  <a href='#!' className='footer-social-icon'>
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href='#!' className='footer-social-icon'>
    <FontAwesomeIcon icon={faGoogle} />
  </a>
  <a href='#!' className='footer-social-icon'>
    <FontAwesomeIcon icon={faInstagram} />
  </a>
  <a href='#!' className='footer-social-icon'>
    <FontAwesomeIcon icon={faLinkedinIn} />
  </a>
  <a href='#!' className='footer-social-icon'>
    <FontAwesomeIcon icon={faGithub} />
  </a>
</div>
<hr />
        <p className="footer-text">
          © 2020 Copyright: <a className='text-white' href='https://example.com/'>YourWebsite.com</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
