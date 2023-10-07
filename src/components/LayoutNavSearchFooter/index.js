import React from "react";
import Navbar from "../Navbar";
import Search from "../Search";
import Footer from "../Footer";
import "./index.css";
import Advertisement from "../Advertisement";
import Filter from "../Filter";

const LayoutNavSearchFooter = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 70 }}>
        <Search />
        <div className="layout-container">
          <div className="layout-sidebar">
            <article className="layout-content" style={{ height: 600 }}>
              <Filter />
            </article>
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
