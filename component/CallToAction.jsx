import { Fragment } from "react";
import ctaImage from "/assets/cta/cta.jpg";
function CallToAction() {
  return (
    <Fragment>
      <section className="cta" style={{ backgroundImage: `url(${ctaImage})` }}>
        <div className="cta-overlay">
          <h2>Ready to Get Started?</h2>
          <p>Start building your dream website today!</p>
          <button className="cta-btn">Sign Up Now</button>
        </div>
      </section>
    </Fragment>
  );
}

export default CallToAction;
