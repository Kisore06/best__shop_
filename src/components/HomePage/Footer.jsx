import React, {useState} from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaTelegram }
from "react-icons/fa";
import "./Footer.css";
import axios from 'axios';
import api from "../../utils/api";

const sections = [
  {
    title: "Categories",
    items: ["Footwears", "Watches", "Mobiles", "Bags &Luggage","Sports Goods", "Baby World", "Toys","Gifts"],
  },
  {
    title: "Contact Us",
    items: ["(607) 936-8058", "example@gmail.com","Head Office MT RoadNear Taluka Office, Sathyamangalam"],
  },
  {
    title: "Legal",
    items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
  },
];

const items = [
  { name: "Facebook", icon: FaFacebook, link:"https://www.facebook.com/BESTSHOP786/" },
  { name: "Instagram", icon: FaInstagram, link:"https://www.instagram.com/bestshop_sathy/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Twitch", icon: FaWhatsapp, link: "https://www.whatsapp.com" },
  { name: "Github", icon: FaTelegram, link: "https://telegram.com/" },
];
const Footer = () => {
  const[userInfo,setUserInfo] = useState({
    name:'',
    phone_number:'',
    address:'',
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data={
      name:userInfo.name,
      phone_number:userInfo.phone_number,
      address:userInfo.address
    };

    try{
      const response = await axios.post(`${api}/userinfo`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
      console.log(response.data);
      setUserInfo({
        name:'',
        phone_number:'',
        address:'',
      })
      window.alert('Details Submitted successfully!')
    } catch (error) {
      console.log(error);
      window.alert('An error occured while submitting!!')
    }
  }
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
            Get updates on latest Discounts, Offers and New Arrivals sent to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="footer-subscribe-form">
          <input
            className="footer-subscribe-input"
            type="text"
            placeholder="Name"
            value={userInfo.name}
            onChange={(e) => setUserInfo({ ...userInfo, name:e.target.value})}
            required
          />
          <input
            className="footer-subscribe-input"
            type="tel"
            placeholder="Phone Number"
            value={userInfo.phone_number}
            onChange={(e) => setUserInfo({ ...userInfo, phone_number:e.target.value})}
            required
          />
          <textarea
            className="footer-subscribe-input"
            placeholder="Address"
            value={userInfo.address}
            onChange={(e) => setUserInfo({ ...userInfo, address:e.target.value})}
            required
          ></textarea>
            <button type="submit" className="footer-subscribe-button">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-icons">
          {items.map((x, index) => {
            const Icon = x.icon;
            return (
              <a key={index} href={x.link} target="_blank"rel="noopener noreferrer" className="footer-icon">
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