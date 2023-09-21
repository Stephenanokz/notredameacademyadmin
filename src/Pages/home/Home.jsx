import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img src="https://png.pngtree.com/png-clipart/20230105/original/pngtree-school-logo-design-png-image_8873860.png" className="homeImg" alt="logo" />
      <h1 className="homeTitle">
        Welcome back, {JSON.parse(localStorage.getItem("user")).username}.
      </h1>
      <span className="homeSubTitle">
        To create and edit any Module, please use the appropriate tab on the Sidebar
      </span>
    </div>
  );
};

export default Home;
