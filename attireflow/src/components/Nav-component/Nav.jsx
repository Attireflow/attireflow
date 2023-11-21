import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav_css from "./Nav.module.css";

function Nav() {
  return (
    <nav>
      <div className={Nav_css.nav}>
        <div className={Nav_css.nav_contents}>
          <h1>ATTIREFLOW</h1>
          <ul>
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Shop</p>
            </li>
            <li>
              <p>About</p>
            </li>
            <li>
              <p>Contact Us</p>
            </li>
          </ul>
          <div className={Nav_css.nav_icons}>
            <box-icon
              name="search"
              color="#085CB2"
              size="md"
              animation="tada-hover"
              style={{ cursor: "pointer" }}
            ></box-icon>
            <hr />
            <box-icon
              name="shopping-bag"
              color="#085CB2"
              size="md"
              animation="tada-hover"
              style={{ cursor: "pointer" }}
            ></box-icon>
          </div>
        </div>
      </div>

      <Outlet />
    </nav>
  );
}

export default Nav;