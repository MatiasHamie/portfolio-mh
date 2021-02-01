import React from "react";

const Card = ({ image, title, desc }) => {
  return (
    <div className="card-container">
      <div className="card">
        <img className="card-img" src={image} alt="waves" />
        <div className="card-body">
          <h1 className="card-title">{title}</h1>
          <h3 className="card-description">{desc}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
