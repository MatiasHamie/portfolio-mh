import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../../assets/img/LogoMH.svg";

const NavBar = () => {
  //estilo de un link activo
  const styleLinkActive = {
    fontWeight: "bold",
    color: "yellow",
    textShadow: "1 1 .8rem yellow",
  };

  // navegacion logo
  const history = useHistory();

  const handleLogoClick = () => {
    history.push("/");
  };

  //colapsa el navbar cuando se clickea en un link
  const handleToggle = () => {
    setTimeout(() => {
      setExpanded(false);
    }, 500);
  };

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      className="navbar"
      collapseOnSelect
      expand="md"
      variant="dark"
      expanded={expanded}
      style={{ position: "relative", zIndex: 99 }}
    >
      <Navbar.Brand className="navbar-brand" href="#home">
        <img
          src={logo}
          alt="logo"
          width="50"
          height="50"
          className="navbar-brand mx-5"
          onClick={handleLogoClick}
        />
      </Navbar.Brand>
      <Navbar.Toggle
        onClick={() => setExpanded(expanded ? false : "expanded")}
        aria-controls="responsive-navbar-nav"
      >
        {!expanded ? (
          <i className="hamburger fas fa-bars"></i>
        ) : (
          <i className="hamburger fas fa-times"></i>
        )}
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item styled-links mx-md-5" onClick={handleToggle}>
            <div className="nav-bar_link_line w-50 mx-auto"></div>
            <NavLink
              className="nav-link text-center"
              activeStyle={styleLinkActive}
              to="/portfolio"
            >
              <b>P</b>ortafolio
            </NavLink>
          </li>
          <li className="nav-item styled-links mx-md-5" onClick={handleToggle}>
            <div className="nav-bar_link_line w-50 mx-auto"></div>
            <NavLink
              className="nav-link text-center"
              to="/about"
              activeStyle={styleLinkActive}
            >
              <b>S</b>obre Mi
            </NavLink>
          </li>
          <li className="nav-item styled-links  mx-md-5" onClick={handleToggle}>
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
