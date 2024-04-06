import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css';

const UserInfo = () => {
 const [userInfo, setUserInfo] = useState([]);

 useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('http://localhost:3001/userinfo');
        setUserInfo(response.data);
      } catch (error) {
        console.error('Error fetching genders:', error);
      }
    };

    fetchUserInfo();
 }, []);
  return (
    <div style={{ paddingTop: '80px', marginLeft:'50px', marginRight:'50px'}}>
    <h2 className="product-table-title">User Information</h2>
      <div className="scrollable-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
         {userInfo.map((userInfo) => (
            <tr key={userInfo.info_id}>
                <td>{userInfo.info_id}</td>
                <td>{userInfo.name}</td>
                <td>{userInfo.phone_number}</td>
                <td>{userInfo.address}</td>
            </tr>
         ))}
        </tbody>
      </table>
      </div>
    </div>
 );
};
export default UserInfo
