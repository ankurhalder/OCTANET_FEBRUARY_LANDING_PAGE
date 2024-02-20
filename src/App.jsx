import { Fragment } from "react";
import {
  Hero,
  Features,
  HowItWorks,
  Testimonials,
  CallToAction,
} from "../component";
import { Header, Footer } from "../containers";
function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </Fragment>
  );
}
//

export default App;
