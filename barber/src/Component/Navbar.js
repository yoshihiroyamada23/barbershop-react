import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar-header">
        <span className="initials">CT</span>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li color="black">
          <a href="/myworks">My Works</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
