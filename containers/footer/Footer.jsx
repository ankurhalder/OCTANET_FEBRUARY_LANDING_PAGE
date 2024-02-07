import { Fragment } from "react";
function Footer() {
  return (
    <Fragment>
      <footer className="footer">
        <div className="footer-content">
          <div className="logo">Your Logo</div>
          <div className="social-icons">
            <a href="#facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="copyright">
          © 2024 Your Company. All rights reserved.
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
