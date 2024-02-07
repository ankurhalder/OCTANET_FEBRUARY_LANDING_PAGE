import { Fragment } from "react";
function Features() {
  return (
    <Fragment>
      <section className="features">
        <div className="feature">
          <i className="fas fa-laptop-code"></i>
          <h2>No Coding Required</h2>
          <p>Create stunning websites without writing a single line of code.</p>
        </div>
        <div className="feature">
          <i className="fas fa-paint-brush"></i>
          <h2>Customizable Designs</h2>
          <p>
            Choose from a variety of templates and customize to your liking.
          </p>
        </div>
        <div className="feature">
          <i className="fas fa-cogs"></i>
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
