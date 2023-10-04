import React from "react";
import ads from "../../image/ads.png";

const Advertisement = () => {
  return (
    <div>
      <a href="https://www.facebook.com/profile.php?id=100095496554189">
        <img src={ads} alt="" style={{ height: 1000, objectFit: "cover" }} />
      </a>
    </div>
  );
};

export default Advertisement;
