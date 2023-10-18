import { useState } from "react";
import './Header.css'

import { Link } from 'react-router-dom';
const Header = () => {

  const [show, setShow] = useState(false);
  
  return (
    <header className="header" id="home">
      <nav class="nav container">
        <a href="#home" className="nav-logo"></a>
        <div className={`nav-menu ${show ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={() => setShow(!show)}>
                Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={() => setShow(!show)}>
                About</a>
            </li>
            <li className="nav-item">
              <a href="#schedules" className="nav-link" onClick={() => setShow(!show)}>
                Schedules</a>

            </li>
            <li className="nav-item">
              <a href="#program" className="nav-link" onClick={() => setShow(!show)}>
                Membership</a>
            </li>
            <li className="nav-item">
              <a href="#booking" className="nav-link" onClick={() => setShow(!show)}>Booking</a>
            </li>
            <li className="nav-item">
              <a href="#member" className="nav-link" onClick={() => setShow(!show)}>Offers</a>
            </li>
            <div className="nav-close" id="nav-close" onClick={() => setShow(!show)}>

            </div>
          </ul>

          <Link to="/signin" className="nav-button">
            Courses
          </Link>
        </div>

        <div class="nav-toggle" onClick={() => setShow(!show)}>
          <i class="ri-menu-4-line"></i>
        </div>

      </nav>
    </header>
  );
};
export default Header;