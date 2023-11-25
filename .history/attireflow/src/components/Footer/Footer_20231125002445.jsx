import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={classes.footer_contents}>
        <h1>ATTIREFLOW</h1>
        <div className={classes.footer_icons}>
          <box-icon type="logo" color="white" name="facebook-circle"></box-icon>
          <box-icon type="logo" color="white" name="whatsapp"></box-icon>
          <box-icon type="logo" color="white" name="instagram"></box-icon>
          <box-icon type="logo" color="white" name="twitter"></box-icon>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
