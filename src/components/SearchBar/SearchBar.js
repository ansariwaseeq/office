import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <div className='search-bar-container'>
      <FiSearch className='search-icon' />
      <input
        type="text"
        placeholder="Search Dashboard"
        className='search-input'
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
