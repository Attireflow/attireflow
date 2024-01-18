import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className={classes.footer_contents}>
        <div className={classes.footer_content}>
          <div>
            <h1>ATTIREFLOW</h1>
            <span className={classes.footer_icons}>
              <box-icon
                type="logo"
                color="white"
                name="facebook-circle"
              ></box-icon>
              <box-icon type="logo" color="white" name="whatsapp"></box-icon>
              <box-icon type="logo" color="white" name="instagram"></box-icon>
              <box-icon type="logo" color="white" name="twitter"></box-icon>
            </span>
          </div>
          <div>
            <h6>Explore All</h6>
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="products">Collections</Link>
            </p>
            <p>Why Choose Us</p>
          </div>
        </div>
        <div className={classes.footer_content}>
          <div>
            <h6>Quick Links</h6>
            <p>
              <Link to="/privacy">FAQ</Link>
            </p>
            <p>Reviews</p>
            <p>
              <Link to="/privacy">Privacy Policy</Link>
            </p>
            <p>About Us</p>
          </div>
          <div>
            <h6>Get in touch</h6>
            <span className={classes.input_group}>
              <input type="text" placeholder="Enter Your Email" />
              <button type="submit">Subscribe</button>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
