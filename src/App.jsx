import { Fragment } from "react";
import {
  Hero,
  Features,
  HowItWorks,
  Testimonials,
  CallToAction,
} from "../component";
import { Header } from "../containers";
function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </Fragment>
  );
}

export default App;
