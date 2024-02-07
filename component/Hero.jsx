import { Fragment } from "react";
import heroImage from "/assets/hero.jpg";
function Hero() {
  return (
    <Fragment>
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Create Websites Without Any Coding Knowledge</h1>
            <p>Build beautiful and professional websites effortlessly.</p>
            <button className="cta-btn">Get Started</button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Hero;
