import React from "react";
const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">

    <div className="collaps" id="navt">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <h3 className="logo">Cocktail Bazaar</h3>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/reviews">Favourites❤️</a>
        </li>
      </ul>
    </div>
 </div>
</nav>
  );
};

export default NavBar;
