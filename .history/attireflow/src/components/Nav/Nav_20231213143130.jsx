import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Nav_css from "./Nav.module.css";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => {
    setNavOpen(false);
  };

  const openNav = () => {
    setNavOpen(true);
  };

  return (
    <nav>
      {/*Mobile View*/}

      <div className={Nav_css.open_icon}>
        <h1>ATTIREFLOW</h1>
        <box-icon name="menu" onClick={openNav}></box-icon>
      </div>

      <div
        className={
          navOpen
            ? `${Nav_css.nav_container} ${Nav_css.open_nav}`
            : Nav_css.nav_container
        }
      >
        <div>
          <box-icon name="x" onClick={closeNav}></box-icon>
        </div>
        <hr />
        <div>
          <div>
            <ul className={Nav_css.mobile_list}>
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
          </div>
          <div className="mt-10">
            <Link to={"/tray"}>
              <button onClick={closeNav}>
                <box-icon
                  name="shopping-bag"
                  color="#085CB2"
                  size="md"
                  animation="tada-hover"
                  style={{ cursor: "pointer" }}
                ></box-icon>
                <span>Your Cart</span>
              </button>
            </Link>
          </div>
        </div>
        <hr />
      </div>

      {/*Desktop View*/}
      <div
        className={Nav_css.desktop_nav}
      >
        <div className={Nav_css.nav_contents}>
          <h1>ATTIREFLOW</h1>
          <ul>
            <li>
              <NavLink
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
    </nav>
  );
}

export default Nav;

