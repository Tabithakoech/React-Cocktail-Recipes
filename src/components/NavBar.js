

import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navBarPosition">
      <div className="nav-center">
       

        <ul className="navLink">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
