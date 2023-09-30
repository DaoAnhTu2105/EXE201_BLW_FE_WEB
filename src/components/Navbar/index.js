import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faChevronRight,
  faDisplay,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import { faAdversal, faJs } from "@fortawesome/free-brands-svg-icons";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import imgUser from "../../image/user.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import imgLogo from "../../image/logo.jpg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 4,
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [buttonVip, setButtonVip] = useState(false);
  const [mouseLeftContent, setMouseLeftContent] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user: ", user);
  useEffect(() => {
    if (mouseLeftContent) {
      const timer = setTimeout(() => {
        setButtonVip(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [mouseLeftContent, buttonVip]);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div style={{ position: "fixed", zIndex: 1000, width: "100%" }}>
        <nav
          className="navbar"
          role="navigation"
          aria-label="main navigation"
          style={{
            paddingTop: "0",
            paddingBottom: "0",
            borderBottom: "3px solid #eeeeee",
          }}
        >
          <div className="navbar-brand">
            <a
              href="/"
              style={{ paddingLeft: "40px" }}
              maxWidth="100"
              height="100"
            >
              {/* style={{ letterSpacing: '.5rem', fontSize: "40px", color: "#00d1b2", fontWeight: '600', fontFamily: 'Houstander Font Duo, cursive', paddingRight:"20px" }} */}
              <img
                src={imgLogo}
                style={{ borderRadius: "50%" }}
                width="130"
                height="130"
              />

              {/* Blw */}
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
              <Link className="navbar-item" to="/list-expert">
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
                  {!user && (
                    <div style={{ marginRight: 10 }}>
                      <Link className="button is-primary" to="/register">
                        <strong>Sign up</strong>
                      </Link>
                      <Link className="button is-light" to="/login">
                        Log in
                      </Link>
                    </div>
                  )}
                  {user && (
                    <Box
                      sx={{ flexGrow: 0, marginRight: 5, marginTop: "-10px" }}
                    >
                      <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          <Avatar
                            alt="Remy Sharp"
                            src={user.data.avatar ? user.data.avatar : imgUser}
                            style={{ width: "30px", height: "30px" }}
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Open settings">
                        <ArrowDropDownIcon onClick={handleOpenUserMenu} />
                      </Tooltip>
                      <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                        <Link to="/profile" style={{ color: "black" }}>
                          <MenuItem>
                            <Typography textAlign="center">
                              Tài khoản
                            </Typography>
                          </MenuItem>
                        </Link>
                        <MenuItem>
                          <Typography textAlign="center">
                            Gói Premium
                          </Typography>
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>
                          <Typography textAlign="center">Đăng xuất</Typography>
                        </MenuItem>
                      </Menu>
                    </Box>
                  )}

                  <div>
                    <button
                      className="button is-warning"
                      onMouseLeave={() => {
                        setMouseLeftContent(true);
                      }}
                      onMouseEnter={() => {
                        setMouseLeftContent(false);
                        setButtonVip(true);
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
            marginTop: 15,
            width: 380,
            borderRadius: "10px",
            top: 80,
            right: 0,
            zIndex: 1000,
            position: "fixed",
          }}
          onMouseEnter={() => {
            setMouseLeftContent(false);
          }}
          onMouseLeave={() => {
            setMouseLeftContent(true);
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
            <Link to="/pack">
              <p
                className="title is-6 mb-0"
                style={{ color: "rgba(245, 245, 245, 0.8", paddingTop: "10px" }}
              >
                Quyền lợi thành viên
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{
                    color: "rgba(245, 245, 245, 0.8",
                    paddingLeft: "150px",
                  }}
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
