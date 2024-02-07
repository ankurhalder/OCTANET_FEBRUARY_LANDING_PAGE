import { Fragment } from "react";
import {
  Hero,
  Features,
  HowItWorks,
  Testimonials,
  CallToAction,
} from "../component";
function App() {
  return (
    <Fragment>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </Fragment>
  );
}

export default App;
