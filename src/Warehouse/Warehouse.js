import React, { useState } from 'react';
import data from '../data.json'; 
import './Warehouse.css'
import { Link } from 'react-router-dom';


function Warehouse() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='name'>
      <h1>Name Search</h1>
      <input
        type="text"
        placeholder="Search for a name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
     
      <ul >
        {filteredData.map((item) => (
          <li key={item.id}>
            <Link to={`warehouse/${item.id}`}>
            <p>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Warehouse;
