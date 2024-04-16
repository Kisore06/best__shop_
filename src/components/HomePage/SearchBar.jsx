import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
 const [searchQuery, setSearchQuery] = useState('');
 const navigate = useNavigate();

 const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
 };

 const handleSearch = async (e) => {
    if (e.key === 'Enter') {
      try {
        const response = await axios.get(`http://localhost:3001/search?query=${searchQuery}`);
        console.log('Search results:', response.data);
        // Navigate to the search results page with the search results
        navigate('/search-results', { state: { searchResults: response.data } });
      } catch (error) {
        console.error('Error searching:', error);
      }
    }
 };

 return (
    <div className="search-container">
      <input
        className='search-box'
        type='text'
        placeholder='Search'
        onChange={handleInputChange}
        onKeyDown={handleSearch}
      />
      <FaSearch className="search-icon" />
    </div>
 );
};

export default SearchBar;
