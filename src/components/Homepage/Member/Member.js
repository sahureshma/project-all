import React from 'react';
import HeroImage1 from '../../../assests/bg2.jpg';
import './Member.css'
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '30%', 
    borderRadius: '10%', 
  },
  textContainer: {
    maxWidth: '50%',
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  boldParagraph: {
    fontSize: '1rem', // Adjust the font size as needed
    fontWeight: 'bold',
    
  },
};

const Member = () => {
  return (
    <section>
      <div style={styles.container}>
        <div style={styles.textContainer}>
          <p style={styles.boldText}>Get 20% off for student</p>
          <h1 className="hero-title">
              <h1 className='size'>Student discounts available.</h1>
            
            <p className='para'>Get ready for some fun in the sun!</p>
          </h1>
          <div className='all'>
          <p style={styles.boldParagraph}> Lorem ipsum dolor sit amet</p>
          <p style={styles.boldParagraph}> Massa quis natoque sit quam</p>
          <p style={styles.boldParagraph}> Eros non pellentesque elit</p>
          <p style={styles.boldParagraph}> tortor id euismod habitant</p>
          <p style={styles.boldParagraph}> Sed suspendisse id in ultrices</p>
          </div>
          <br />
          <a href="signin" className="hero-btn-get-started">
            Explore More
          </a>
        </div>
        <img src={HeroImage1} alt="Your Image" style={styles.image} />
      </div>
    </section>
  );
};

export default Member;