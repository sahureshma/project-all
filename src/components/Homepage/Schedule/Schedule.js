import React from 'react';
import image5 from '../../../assests/har.jpg';
import image6 from '../../../assests/ox.jpg';
import image7 from '../../../assests/stand.jpg';
import image8 from '../../../assests/nan.jpg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Schedule.css';

export default function Schedule() {
  return (
    <section id="Portfolio" className="portfolio_section">
      <h1>Our Destination</h1>
      <div className="container portfolio__container">
        <div className="row">
          <article className="portfolio__items col-md-4">
            <div className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image5} alt="IMG1" />
              </div>
              <h3>Harvard University</h3>
              <p>Cambridge, Massachusetts, UK</p>
              <MoreHorizIcon className="more-icon" />
            </div>
          </article>
          <article className="portfolio__items col-md-4">
            <div className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image6} alt="IMG2" />
              </div>
              <h3>Oxford University</h3>
              <p>Oxford, England</p>
              <MoreHorizIcon className="more-icon" />
            </div>
          </article>
          <article className="portfolio__items col-md-4">
            <div className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image7} alt="IMG3" />
              </div>
              <h3>Stanford University</h3>
              <p>Stanford, California</p>
              <MoreHorizIcon className="more-icon" />
            </div>
          </article>
          <article className="portfolio__items col-md-4">
            <div className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image8} alt="IMG4" />
              </div>
              <h3>Nanyang Technological University</h3>
              <p>Nanyang Ave, Singapura</p>
              <MoreHorizIcon className="more-icon" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
