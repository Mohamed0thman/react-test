import React from "react";
import logo from "../../assets/logo.png";

const SimpleNavbar = () => {
  return (
    <div className="container hidden border-b border-main-100 py-6 lg:block">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default SimpleNavbar;
