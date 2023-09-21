import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            admin@verbumschool.org
          </span>
        </div>
        <div className="topRight">
          <img
            src="https://png.pngtree.com/png-clipart/20230105/original/pngtree-school-logo-design-png-image_8873860.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
