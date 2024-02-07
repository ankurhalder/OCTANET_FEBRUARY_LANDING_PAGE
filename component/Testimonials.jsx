import { Fragment } from "react";
function Testimonials() {
  return (
    <Fragment>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <img src="https://via.placeholder.com/100" alt="Testimonial Avatar" />
          <p>
            `&quot;`I was amazed at how easy it was to create my website. The
            templates are beautiful and the drag-and-drop editor is
            intuitive!`&quot;`
          </p>
          <h3>John Doe</h3>
        </div>
        <div className="testimonial">
          <img src="https://via.placeholder.com/100" alt="Testimonial Avatar" />
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
