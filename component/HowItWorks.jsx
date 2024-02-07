import { Fragment } from "react";
import step1Image from "/assets/steps/step-1.png";
import step2Image from "/assets/steps/step-2.jpg";
import step3Image from "/assets/steps/step-3.jpg";
function HowItWorks() {
  return (
    <Fragment>
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <img src={step1Image} alt="Step 1" />
            <h3>Choose a Template</h3>
            <p>Select a template from our library that fits your needs.</p>
          </div>
          <div className="step">
            <img src={step2Image} alt="Step 2" />
            <h3>Customize Your Design</h3>
            <p>Personalize your website with your own content and branding.</p>
          </div>
          <div className="step">
            <img src={step3Image} alt="Step 3" />
            <h3>Publish Your Site</h3>
            <p>With just one click, your website is live and ready to share.</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default HowItWorks;
