import React from "react";
import Navbar from "../Navbar";
import Filter from "../Filter";
import Footer from "../Footer";

const LayoutNavSearchFooter = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 140 }}>
        <Filter />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default LayoutNavSearchFooter;
