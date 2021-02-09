import React from "react";
import fotoMia from "../assets/img/yo.png";

const AboutPage = () => {
  return (
    <div
      className="row aboutme-container
     d-flex flex-md-row flex-column flex-wrap 
     align-items-center justify-content-center"
    >
      <div className="col image-container  text-center">
        <img src={fotoMia} alt="Foto mia" />
      </div>

      <div className="col about-description">
        <h1 className="about_title">
          <span className="inicial">S</span>OBRE{" "}
          <span className="inicial">M</span>I
        </h1>
        <div className="line"></div>
        <div className="subtitle pt-5">
          <h2>
            Tengo 30 años y{" "}
            <b>
              soy técnico electromecánico especializado en automatización
              industrial
            </b>
            , una profesión que me gusta desde que soy adolescente y por eso
            dediqué mi carrera laboral a este rubro en el que ya{" "}
            <b>tengo más de 10 años de experiencia</b>.
          </h2>
          <br />

          <h2>
            Trabajé mucho de lo mío y paralelamente estudié inglés, música y
            hasta fui DJ, pero en el{" "}
            <b>2019 descubrí que la programación me apasionaba mucho más</b>.
            Ese mismo año empecé a estudiar en la Universidad Tecnológica
            Nacional y al poco tiempo de arrancar ya sabía cuál era{" "}
            <b>
              mi objetivo: convertirme en programador y trabajar duro para
              serlo.
            </b>
          </h2>
          <br />

          <h2>
            Cuando no estoy programando, me vas a encontrar viendo una serie,
            entrenando al aire libre, disfrutando de un buen café o una cerveza
            bien fría con amigos. Si tengo la suerte, incluso viajando por
            alguna ciudad del mundo.
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
