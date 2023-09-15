import React from "react";
import "./menu.css";
const Menu = () => {
  return (
    <div className="menu-wrapper">
      <a className="text-blue-50" href="/">Home</a>
      <a href="/aboutus">About Us </a>
      <a href="/contactus">Contact Us </a>
    </div>
  );
};
export default Menu;
