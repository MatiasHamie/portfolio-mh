import React from "react";
import meImg from "../assets/img/me-home.png";
import ParticlesUI from "../components/ParticlesUI";

const HomePage = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <ParticlesUI />
      <div
        style={{
          position: "relative",
          pointerEvents: "none",
        }}
        className="row d-flex flex-wrap flex-md-row-reverse 
        flex-sm-column justify-content-sm-center align-items-center 
        vh-100
        "
      >
        <div
          className=" col col-lg-5 col-md-5 home_description animate__animated
          animate__fadeIn "
        >
          <h1 className="home_title text-center pt-5">
            <span className="inicial">M</span>ATIAS{" "}
            <span className="inicial">H</span>AMIE
          </h1>
          <h3 className="home_subtitle text-center py-5">
            FRONT END DEVELOPER
          </h3>
        </div>
        <div className="col-lg-6 col-md-7 col-sm-12">
          <div className="home_me-img text-center" data-depth="0">
            <img className="me mb-5 w-50" src={meImg} alt="me" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
