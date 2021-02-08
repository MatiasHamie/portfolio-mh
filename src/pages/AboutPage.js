import React from "react";
import me from "../assets/img/yo.jpg";

const AboutPage = () => {
  return (
    <div
      className="row aboutme-container
     d-flex flex-md-row flex-column flex-wrap 
     align-items-center justify-content-center"
    >
      <div className="col image-container  text-center">
        <img src={me} alt="Foto mia" />
      </div>

      <div className="col about-description">
        <h1 className="about_title">
          <span className="inicial">S</span>OBRE{" "}
          <span className="inicial">M</span>I
        </h1>
        <div className="line"></div>
        <div className="subtitle pt-5">
          <h2>
            La relación amor - odio que tengo con la programación, me motiva a
            seguir aprendiendo para poder afrontar los desafios que se me
            presentan
          </h2>
          <br />

          <h2>
            Me identifico como un programador front-end, me gusta poder ver
            materializado en una interface lo que codeo.
          </h2>
          <br />
        </div>

        <div className="redes d-flex flex-row justify-content-center align-items-center">
          <h2 className="github">
            <a href="https://github.com/MatiasHamie/">
              <i className="fab fa-github py-5 mx-4"></i>
              Github
            </a>
          </h2>
          <h2 className="linkedin mx-5">
            <a href="https://www.linkedin.com/in/matias-hamie-004612152">
              <i className="fab fa-linkedin mx-4"></i>
              LinkedIn
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
