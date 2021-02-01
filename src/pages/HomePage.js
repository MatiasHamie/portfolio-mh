import React from "react";
import meImg from "../assets/img/me-home.png";
import SceneParallax from "../components/ui/SceneParallax";

const HomePage = () => {
  return (
    <div style={{ position: "relative", height: "90vh" }}>
      <SceneParallax />
      <div className="home-container">
        <div className="home_me-img" data-depth="0">
          <img className="me" src={meImg} alt="me" />
        </div>
        <div className="home_description" data-depth="0">
          <h1 className="home_title">
            <strong>M</strong>ATIAS <strong>H</strong>AMIE
          </h1>
          <h3 className="home_subtitle">PROGRAMADOR</h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
