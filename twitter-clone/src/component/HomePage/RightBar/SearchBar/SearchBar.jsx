import React from "react";
import { FaSearch } from "react-icons/fa";
import {AiFillCloseCircle} from "react-icons/ai";
import './SearchBar.css';

import { useState } from "react";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.user_name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="trends">
      <div className="trends__search">
        <input
          type="text"
          className="trend__control"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="trend__icon">
        {filteredData.length === 0 ? (
          <FaSearch className="search" />
          ) : (
            <AiFillCloseCircle id="clearBtn" onClick={clearInput} />
            )}
        </div>
      </div>
      {filteredData.length != 0 && (
         <div className="dataResult">
         {filteredData.slice(0, 15).map((value, key) => {
           return (
             <a className="dataItem" href={value.user_image} target="_blank">
               <p>{value.user_name} </p>
            
             </a>
           );
         })}
       </div>
         )}
         </div>
      
  
  );
};

export default SearchBar;