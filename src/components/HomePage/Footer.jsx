import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa";
import "./Footer.css";

const sections = [
  {
    title: "Categories",
    items: ["Clothes", "Watches", "Cosmetics", "Shoes", "Bags","Trophy"],
  },
  {
    title: "Categories",
    items: ["Gifts", "Sports", "Toys", "Mobiles","Baby Products","General Goods"],
  },
  {
    title: "Contact Us",
    items: ["(607) 936-8058", "example@gmail.com","Head Office MT Road Near Taluka Office, Sathyamangalam"],
  },
  {
    title: "Legal",
    items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
  },
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/BESTSHOP786/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/bestshop_sathy/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Twitch", icon: FaWhatsapp, link: "https://www.whatsapp.com" },
  { name: "Github", icon: FaTelegram, link: "https://telegram.com/" },
];
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main">
        {sections.map((section, index) => (
          <div key={index} className="footer-section">
            <h6 className="footer-title">{section.title}</h6>
            <ul className="footer-list">
              {section.items.map((item, i) => (
                <li key={i} className="footer-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="footer-subscribe">
          <p className="footer-subscribe-title">Let's Stay Connected</p>
          <p className="footer-subscribe-text">
            Get updates on latest Discounts, Offers and New Arrivals sent to your inbox weekly.
          </p>
          <form className="footer-subscribe-form">
            <input
              className="footer-subscribe-input"
              type="email"
              placeholder="Enter email.."
            />
            <button className="footer-subscribe-button">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-icons">
          {items.map((x, index) => {
            const Icon = x.icon;
            return (
              <a key={index} href={x.link} target="_blank" rel="noopener noreferrer" className="footer-icon">
                <Icon />
              </a>
            );
          })}
        </div>
        <p className="copyright">
          &copy; 2024 BestShop. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;