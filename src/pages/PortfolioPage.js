import React, { useState } from "react";
import Card from "../components/ui/Card";
// import capture from "../assets/img/capture.png";
// import waves from "../assets/img/waves.png";
// import beatmaker from "../assets/img/beatmaker.png";
import { projects } from "../data/projectsInfo";

const PortfolioPage = () => {
  const [counter, setCounter] = useState(0);

  const handleNextProject = (e) => {
    const selectedProject = counter === projects.length - 1 ? 0 : counter + 1;
    setCounter(selectedProject);
    console.log("next", counter);
  };
  const handlePreviousProject = (e) => {
    const selectedProject = counter === 0 ? projects.length - 1 : counter - 1;
    setCounter(selectedProject);
    console.log("prev", counter);
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio_description animate__animated animate__slideInUp">
        <h1 className="portfolio_title">
          Portafolio
        </h1>
        <h3 className="portfolio_subtitle">
          Trabajos realizados por mi
        </h3>

        <div className="button-container">
          <button onClick={handlePreviousProject}>
            <i className="fas fa-arrow-circle-left"></i>
          </button>
          <button onClick={handleNextProject}>
            <i className="fas fa-arrow-circle-right"></i>
          </button>
        </div>
      </div>
      <Card {...projects.filter((p) => p.id === counter)[0]} />
    </div>
  );
};

export default PortfolioPage;
