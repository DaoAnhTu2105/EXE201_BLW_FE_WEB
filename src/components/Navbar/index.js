import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import premiumLogo from "./../../image/premium-logo.png"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faChevronRight,
  faDisplay,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import { faAdversal, faJs } from "@fortawesome/free-brands-svg-icons";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 4,
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [buttonVip, setButtonVip] = useState(false);
  const [mouseLeftContent, setMouseLeftContent] = useState(false);


  useEffect(() => {
    if (mouseLeftContent) {
      const timer = setTimeout(() => {
        setButtonVip(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [mouseLeftContent, buttonVip]);


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
                  <div>
                    <button
                      className="button is-warning"
                      onMouseLeave={() => {
                        setMouseLeftContent(true);
                      }}
                      onMouseEnter={() => {
                        setMouseLeftContent(false)
                        setButtonVip(true)
                      }}
                      style={{ display: "flex", justifyContent: "flex-start" }}
                    >
                      <div>
                        <FontAwesomeIcon icon={faCrown} />
                        &nbsp; &nbsp;
                        <span className="title is-6">VIP</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </nav>
      </div>
      {buttonVip && (
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            marginTop: 5,
            width: 380,
            borderRadius: "10px",
            top: 80,
            right: 0,
            zIndex: 1000,
            position: "fixed"
          }}
          onMouseEnter={() => {
            setMouseLeftContent(false)
          }}
          onMouseLeave={() => {
            setMouseLeftContent(true)
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: 5,
              alignItems: "center",
              paddingLeft: "30px",
              paddingRight: "30px",
              paddingBottom: 10,
            }}
          >
            <Link to='/pack'>
              <p
                className="title is-6 mb-0"
                style={{ color: "rgba(245, 245, 245, 0.8", paddingTop:"10px" }}
              >
                Quyền lợi thành viên<FontAwesomeIcon 
                  icon={faChevronRight}
                  style={{ color: "rgba(245, 245, 245, 0.8", paddingLeft:"150px" }}
                />
              </p>


            </Link>

          </div>
          <div style={{ marginTop: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "rgba(251, 227, 0, 0.2)",
                    width: 30,
                    height: 25,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faDisplay}
                    style={{
                      color: "rgba(251, 227, 0, 0.8",
                      paddingLeft: 6,
                    }}
                  />
                </div>
                &nbsp;
                <span
                  className="subtitle is-6 mb-0"
                  style={{ color: "rgba(245, 245, 245, 0.8" }}
                >
                  Hỗ trợ đa nền tảng
                </span>
              </div>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "rgba(251, 227, 0, 0.2)",
                    width: 30,
                    height: 25,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faJs}
                    style={{
                      color: "rgba(251, 227, 0, 0.8",
                      paddingLeft: 7,
                    }}
                  />
                </div>
                &nbsp;
                <span
                  className="subtitle is-6 mb-0"
                  style={{ color: "rgba(245, 245, 245, 0.8" }}
                >
                  1080P
                </span>
              </div>
            </div>
            <div style={{ display: "flex", paddingLeft: 50, marginTop: 20 }}>
              <div style={{ display: "flex", width: 140, marginLeft: 5 }}>
                <div
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "rgba(251, 227, 0, 0.2)",
                    width: 35,
                    height: 25,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faFire}
                    style={{
                      color: "rgba(251, 227, 0, 0.8",
                      paddingLeft: 6,
                    }}
                  />
                </div>
                &nbsp;
                <span
                  className="subtitle is-6 mb-0"
                  style={{ color: "rgba(245, 245, 245, 0.8" }}
                >
                  Nội dung độc quyền
                </span>
              </div>
              <div style={{ display: "flex", width: 140, marginLeft: 95 }}>
                <div
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "rgba(251, 227, 0, 0.2)",
                    width: 35,
                    height: 25,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faAdversal}
                    style={{
                      color: "rgba(251, 227, 0, 0.8",
                      paddingLeft: 7,
                    }}
                  />
                </div>
                &nbsp;
                <span
                  className="subtitle is-6 mb-0"
                  style={{ color: "rgba(245, 245, 245, 0.8" }}
                >
                  Không quảng cáo
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5" style={{ textAlign: "center" }}>
            <button
              class="button is-warning"
              style={{ color: "black", width: 300 }}
            >
              Đăng kí VIP, tận hưởng nội dung,...
            </button>
          </div>
        </div>

      )}
    </>
  );
};

export default Navbar;
