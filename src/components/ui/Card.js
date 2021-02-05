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
          <button className="mx-5" onClick={handlePreviousProject}>
            <i className="fas fa-arrow-circle-left"></i>
          </button>

          <img
            className={toggle ? "card-img-expanded" : "card-img"}
            src={image}
            alt={title}
            onClick={handleToggle}
          />

          <button className="mx-5" onClick={handleNextProject}>
            <i className="fas fa-arrow-circle-right"></i>
          </button>
        </div>
        <div className="card-body w-50 mx-auto my-5">
          <h1 className="card-title">{title}</h1>
          <h3 className="card-description">{desc}</h3>
        </div>
      </div>

      {/* {toggle && (
        <dialog
          className="dialog"
          style={{ position: "absolute", top: 0 }}
          open
          onClick={handleToggle}
        >
          <img
            className="image"
            src={image}
            onClick={handleToggle}
            alt={desc}
          />
        </dialog>
      )} */}
    </div>
  );
};

export default Card;
