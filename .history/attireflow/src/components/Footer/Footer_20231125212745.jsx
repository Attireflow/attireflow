import React from "react";
import classes from "./Footer.module.css";
function Footer() {
  return (
    <footer>
      <div className={classes.footer_contents}>
        <div>
          
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
          <span className={classes.input_group}>
            <input type="text" placeholder="Enter Your Email"/>
            <button type="submit">Subscribe</button>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
