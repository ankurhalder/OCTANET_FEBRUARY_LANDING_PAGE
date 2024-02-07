import { Fragment } from "react";
import testimonial1Image from "/assets/testimonials/testimonial-1.jpg";
import testimonial2Image from "/assets/testimonials/testimonial-2.jpg";
function Testimonials() {
  return (
    <Fragment>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="grid">
          <div className="testimonial">
            <img src={testimonial1Image} alt="Testimonial 1" />
            <p>
              I was amazed at how easy it was to create my website. The
              templates are beautiful and the drag-and-drop editor is intuitive!
            </p>
            <h3>Marcus Barnson</h3>
          </div>
          <div className="testimonial">
            <img src={testimonial2Image} alt="Testimonial 2" />
            <p>
              I have tried other website builders before, but none were as
              user-friendly as this one. Highly recommend!
            </p>
            <h3>Mukesh Adani</h3>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Testimonials;
