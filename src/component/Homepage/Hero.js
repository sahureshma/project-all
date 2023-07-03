import HeroImage from '../../assest/images/bg-hero.jpg';
const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${HeroImage})` }}>


    <h1 class="hero-title">
    BUILD YOUR BODY WITH <br />
   PROFESSIONAL TRAINER
    </h1>
   

    <a href="signin" class="hero-btn-get-started">JOIN WITH US </a>
   
  </section>
    );
};
export default Hero;