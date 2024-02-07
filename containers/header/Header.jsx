import { Fragment } from "react";

function Header() {
  return (
    <Fragment>
      <header className="header">
        <div className="logo">Your Logo</div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#how-it-works">How It Works</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#cta">Get Started</a>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

export default Header;
