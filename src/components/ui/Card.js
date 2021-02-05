import React, { useState } from "react";

const Card = ({
  image,
  title,
  desc,
  handleNextProject,
  handlePreviousProject,
}) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="card-container">
      <div className="card">
        <div className="button-container d-flex flex-md-row justify-content-center align-items-center">
          <button
            className={toggle ? "mx-3" : "mx-5"}
            onClick={handlePreviousProject}
          >
            <i className="fas fa-arrow-circle-left"></i>
          </button>

          <img
            className={toggle ? "card-img-expanded" : "card-img"}
            src={image}
            alt={title}
            onClick={handleToggle}
          />

          <button
            className={toggle ? "mx-3" : "mx-5"}
            onClick={handleNextProject}
          >
            <i className="fas fa-arrow-circle-right"></i>
          </button>
        </div>
        <div className="card-body w-75 mx-auto my-5">
          <h1 className="card-title">{title} </h1>
          <h3 className="card-description">{desc}</h3>
          <h2 className="card-subtitle card-github">
            <i className="fab fa-github my-4 mx-4"></i>
            Ver codigo fuente
          </h2>
          <h2 className="card-subtitle card-github">
            <i className="fas fa-globe-americas mx-4"></i>
            Demostración
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
