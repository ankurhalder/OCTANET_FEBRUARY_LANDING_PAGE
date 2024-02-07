import { Fragment } from "react";
import testimonial1Image from "/assets/testimonials/testimonial-1.jpg";
import testimonial2Image from "/assets/testimonials/testimonial-2.jpg";
function Testimonials() {
  return (
    <Fragment>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <img src={testimonial1Image} alt="Testimonial 1" />
          <p>
            `&quot;`I was amazed at how easy it was to create my website. The
            templates are beautiful and the drag-and-drop editor is
            intuitive!`&quot;`
          </p>
          <h3>John Doe</h3>
        </div>
        <div className="testimonial">
          <img src={testimonial2Image} alt="Testimonial 2" />
          <p>
            `&quot;`I`&quot;`ve tried other website builders before, but none
            were as user-friendly as this one. Highly recommend!`&quot;`
          </p>
          <h3>Jane Smith</h3>
        </div>
      </section>
    </Fragment>
  );
}

export default Testimonials;
