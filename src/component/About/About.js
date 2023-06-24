import React from "react";
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1> Welcome To MAESTRO PIZINNI</h1>
            
            <p>
            Order Food Online From India's Best Food Delivery Services .
             EatSure Multiple restaurants. Mega Offers. One Delivery! Free delivery on all orders above ₹ 149 and unlock free dishes on all orders above ₹249*
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="https://images.pexels.com/photos/4773769/pexels-photo-4773769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
