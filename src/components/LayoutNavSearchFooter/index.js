import React from "react";
import Navbar from "../Navbar";
import Search from "../Search";
import Footer from "../Footer";
import "./index.css";
import Advertisement from "../Advertisement";

const LayoutNavSearchFooter = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 70 }}>
        <Search />
        <div className="layout-container">
          <div className="layout-sidebar">
            <article
              className="tile is-child notification is-success layout-content"
              style={{ height: 600 }}
            ></article>
          </div>
          <div className="layout-main-content">{children}</div>
          <div className="layout-sidebar">
            <div className="layout-ads">
              <Advertisement />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LayoutNavSearchFooter;
