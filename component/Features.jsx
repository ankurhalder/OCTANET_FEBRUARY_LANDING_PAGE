import { Fragment } from "react";

import feature1Image from "/assets/features/feature-1.jpg";
import feature2Image from "/assets/features/feature-2.jpg";
import feature3Image from "/assets/features/feature-3.jpg";
function Features() {
  return (
    <Fragment>
      <section className="features">
        <div className="feature">
          <img src={feature1Image} alt="Feature 1" />
          <h2>No Coding Required</h2>
          <p>Create stunning websites without writing a single line of code.</p>
        </div>
        <div className="feature">
          <img src={feature2Image} alt="Feature 2" />
          <h2>Customizable Designs</h2>
          <p>
            Choose from a variety of templates and customize to your liking.
          </p>
        </div>
        <div className="feature">
          <img src={feature3Image} alt="Feature 3" />
          <h2>Easy to Use</h2>
          <p>
            Intuitive drag-and-drop interface makes website building a breeze.
          </p>
        </div>
      </section>
    </Fragment>
  );
}

export default Features;
