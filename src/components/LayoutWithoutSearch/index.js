import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const LayoutWithoutSearch = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 100 }}>
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default LayoutWithoutSearch;
