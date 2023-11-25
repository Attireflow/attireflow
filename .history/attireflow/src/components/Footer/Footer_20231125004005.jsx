import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={classes.footer_contents}>
        <div>
          <h1>ATTIREFLOW</h1>
          <div className={classes.footer_icons}>
            <box-icon
              type="logo"
              color="white"
              name="facebook-circle"
            ></box-icon>
            <box-icon type="logo" color="white" name="whatsapp"></box-icon>
            <box-icon type="logo" color="white" name="instagram"></box-icon>
            <box-icon type="logo" color="white" name="twitter"></box-icon>
          </div>
        </div>
        <div>
          <h6>Explore All</h6>
          <p>Home</p>
          <p>Collections</p>
          <p>Why Choose Us</p>
        </div>
        <div>
          <h6>Quick Links</h6>
          <p>FAQs</p>
          <p>Reviews</p>
          <p>Privacy Policy</p>
          <p>About Us</p>
        </div>
        <div>
          <h6>Get in touch</h6>
          <p>Home</p>
          <p>Collections</p>
          <p>Why Choose Us</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
