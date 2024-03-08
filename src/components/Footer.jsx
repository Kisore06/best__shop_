import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';


const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-links">
        <ul className="footer-links-list">
          <li><a href="#!">Link 1</a></li>
          <li><a href="#!">Link 2</a></li>
          <li><a href="#!">Link 3</a></li>
          <li><a href="#!">Link 4</a></li>
        </ul>
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
