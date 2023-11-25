import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={classes.footer_contents}>
        <h1>ATTIREFLOW</h1>
        <div>
          <box-icon type="logo" name="facebook-circle"></box-icon>
          <box-icon type="logo" name="whatsapp"></box-icon>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
