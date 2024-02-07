import { Fragment } from "react";

function Header() {
  return (
    <Fragment>
      <header className="header">
        <div className="logo">Web Dropper</div>
        <nav className="nav">
          <ul>
            <li>
              <a href="about-us">About Us</a>
            </li>
            <li>
              <a href="services">Services</a>
            </li>
            <li>
              <a href="login">Login</a>
            </li>
            <li>
              <a href="register">Register</a>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

export default Header;
