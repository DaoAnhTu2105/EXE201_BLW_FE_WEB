import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div style={{ position: "fixed", zIndex: 1000, width: "100%" }}>
        <nav
          className="navbar"
          role="navigation"
          aria-label="main navigation"
          style={{ paddingTop: 20, paddingBottom: 10 }}
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
              />
            </a>
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              href="/"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/recipe">
                <span className="navbar-item-text">Thực đơn</span>
              </Link>
              <Link className="navbar-item" to="/plan">
                <span className="navbar-item-text">Kế hoạch</span>
              </Link>
              <Link className="navbar-item" to="/expert">
                <span className="navbar-item-text">Chuyên gia</span>
              </Link>
              <a
                className="navbar-item"
                href="https://www.facebook.com/profile.php?id=100095496554189&mibextid=LQQJ4d"
                target="_blank"
                rel="noreferrer"
              >
                <span className="navbar-item-text">Cộng đồng</span>
              </a>

              {/* <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div> */}
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link className="button is-primary" to="/register">
                    <strong>Sign up</strong>
                  </Link>
                  <Link className="button is-light" to="/login">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
