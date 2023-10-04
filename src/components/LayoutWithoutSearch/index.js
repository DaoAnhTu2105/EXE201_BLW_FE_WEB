import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const LayoutWithoutSearch = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 70, paddingBottom: 50, minHeight: 500 }}>
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default LayoutWithoutSearch;
