import React from 'react';
import Image from '../../../assests/gb1.jpg';
import Image2 from '../../../assests/gb2.jpg';
import Image3 from '../../../assests/boy.jpg';
import './Testimonial.css';
import Navbar from '../../Navbar/Navbar';
const Testimonial = () => {
  return (
    <section className="program container" id="program">
      <h1 className="section-title">Testimonials</h1>
      <div className="row program-row">
        <div className="col program-card">
          <img className="program-card-image" src={Image} alt="Cardio & Strength" />
          <h4 className="card-title">Corey Korsgaard</h4>
          <p className="card-description">
            It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="col program-card">
          <img className="program-card-image" src={Image2} alt="Muscle Building" />
          <h4 className="card-title">Jakob Aminoff</h4>
          <p className="card-description">
            It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="col program-card">
          <img className="program-card-image" src={Image3} alt="Stretch & Yoga" />
          <h4 className="card-title">Carla Press</h4>
          <p className="card-description">
            It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
      <h1 className="additional-text">
        Student Special: Discounted rates on tropical getaways!</h1>
       <h2>Let’s embody your beautiful ideas together, simplify the way you visualize your next big things.</h2>
     <Navbar/>
    </section>
  );
};

export default Testimonial;