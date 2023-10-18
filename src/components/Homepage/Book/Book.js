import React, { useState } from 'react';
import './Book.css';
import IMG from '../../../assests/bg1.jpg'; 

const Book = () => {
    const[count,setCount]=useState(0)
  const [formData, setFormData] = useState({
    city: '',
    arrival: '',
    departure: '',
    star: '',
    room: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
 
  return (
    <div className="book-now-container">
      <div className="left-panel">
        <img src={IMG} alt="Hotel" />
      </div>
      <div className="right-panel">
        <h2>Book now</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Placeholder"
            />
          </div>
          <div className="form-group">
            <label>Arrival</label>
            <input
              type="date"
              name="arrival"
              value={formData.arrival}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Departure</label>
            <input
              type="date"
              name="departure"
              value={formData.departure}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Star</label>
            <input type='number'
            name='star'
            increment={count}/>
            
          </div>
          <div className="form-group">
            <label>Room</label>
            <input
              type="number"
              name="room"
             increment={count}
            />
          </div>
          <button type="submit" className="book-now-button">
            BOOK NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default Book;