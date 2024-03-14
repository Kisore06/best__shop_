<<<<<<< HEAD
// Trophy.js
import React from 'react';
import './Trophy.css'; // Ensure this CSS file is created

const Trophy = () => {
 const orderTrophy = () => {
    // Implement the logic to place an order
=======

import React from 'react';
import './Trophy.css';
const Trophy = () => {
 const orderTrophy = () => {
    //logic to place an order
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
    alert('Ordering a trophy...');
 };

 const connectWhatsApp = () => {
<<<<<<< HEAD
    // Implement the logic to connect through WhatsApp
    // For example, you can open a WhatsApp chat with a predefined message
    const whatsappNumber = '1234567890'; // Replace with your WhatsApp number
=======
    const whatsappNumber = '1234567890'; // WhatsApp number
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
    const message = encodeURIComponent('Hello, I would like to order a customized trophy.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
 };

 return (
    <div style={{ paddingTop: '80px' }}>
    <div className="trophy-page">
      <h1>Customized Trophies</h1>
      <p>At our shop, we offer a wide range of customized trophies to celebrate your achievements. Place an order or connect with us through WhatsApp to discuss your custom trophy needs.</p>
      <button onClick={orderTrophy}>Place an Order</button>
      <button onClick={connectWhatsApp}>Connect on WhatsApp</button>
    </div>
    </div>
 );
};

export default Trophy;
