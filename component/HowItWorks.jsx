import { Fragment } from "react";
function HowItWorks() {
  return (
    <Fragment>
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Choose a Template</h3>
            <p>Select a template from our library that fits your needs.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Customize Your Design</h3>
            <p>Personalize your website with your own content and branding.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Publish Your Site</h3>
            <p>With just one click, your website is live and ready to share.</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default HowItWorks;
