import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../../assets/img/LogoMH.svg";

const NavBar = () => {
  const history = useHistory();

  const handleLogoClick = () => {
    history.push("/");
  };

  return (
    <div className="nav-bar">
      <ul className="nav-bar-link_container">
        <div className="styled-links">
          <div className="nav-bar_link_line"></div>
          <NavLink to="/about" className="nav-bar_link">
            <b>S</b>obre Mi
          </NavLink>
        </div>
        <div className="styled-links">
          <div className="nav-bar_link_line"></div>
          <NavLink to="/portfolio" className="nav-bar_link">
            <b>P</b>ortafolio
          </NavLink>
        </div>
        <div className="styled-links">
          <div className="nav-bar_link_line"></div>
          <NavLink to="/contact" className="nav-bar_link">
            <b>C</b>ontactame
          </NavLink>
        </div>
      </ul>
      <div className="logo-mh">
        <img onClick={handleLogoClick} src={logo} className="logo" alt="logo" />
      </div>
    </div>
  );
};

export default NavBar;
