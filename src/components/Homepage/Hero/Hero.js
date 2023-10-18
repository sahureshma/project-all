import React from 'react';
import HeroImage from '../../../assests/girlbg.jpg'; // Make sure the path is correct
import'./Hero.css'
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    
    borderRadius: '100%',
    
  },
  textContainer: {
    maxWidth: '50%', 
   
   
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
};

const Hero = () => {
  return (
    <section>
      <div style={styles.container}>
        <div style={styles.textContainer}>
          <h1 className="hero-title">
            <span>Tropical</span><br/>
                <span>Destinations</span>
            <span><h1>For Student</h1></span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            suscipit.
            <br />
            Voluptates consectetur quod tempora id, ipsa aliquid.
          </p><br/>
          <a href="signin" className="hero-btn-get-started">
            SIGN UP
          </a>
        </div>
        <img src={HeroImage} alt="Your Image" style={styles.image} />
      </div>
    </section>
  );
};

export default Hero;