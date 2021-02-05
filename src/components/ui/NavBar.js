import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../../assets/img/LogoMH.svg";

const NavBar = () => {
  const history = useHistory();

  const handleLogoClick = () => {
    history.push("/");
  };

  const styleLinkActive = {
    fontWeight: "bold",
    color: "yellow",
    textShadow: "1 1 .8rem yellow",
  };

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav
      style={{ position: "relative", zIndex: 99 }}
      className="navbar navbar-expand-lg navbar-dark vh-10"
    >
      <div className="container-fluid">
        <img
          src={logo}
          alt="logo"
          width="50"
          height="50"
          className="navbar-brand mx-5"
          onClick={handleLogoClick}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          onClick={handleToggle}
        >
          {!toggle ? (
            <i className="hamburger fas fa-bars"></i>
          ) : (
            <i className="hamburger fas fa-times"></i>
          )}
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          data-target=".navbar-collapse"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item styled-links mx-md-5">
              <div className="nav-bar_link_line w-50 mx-auto"></div>
              <NavLink
                className="nav-link text-center"
                activeStyle={styleLinkActive}
                to="/portfolio"
              >
                <b>P</b>ortafolio
              </NavLink>
            </li>
            <li className="nav-item styled-links mx-md-5">
              <div className="nav-bar_link_line w-50 mx-auto"></div>
              <NavLink
                className="nav-link text-center"
                to="/about"
                activeStyle={styleLinkActive}
              >
                <b>S</b>obre Mi
              </NavLink>
            </li>
            <li className="nav-item styled-links  mx-md-5">
              <div className="nav-bar_link_line w-50 mx-auto"></div>
              <NavLink
                className="nav-link text-center"
                to="/contact"
                activeStyle={styleLinkActive}
              >
                <b>C</b>ontactame
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
