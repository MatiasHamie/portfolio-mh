import React, { useState } from "react";
import Card from "../components/ui/Card";
import { projects } from "../data/projectsInfo";

const PortfolioPage = () => {
  const [counter, setCounter] = useState(0);

  const handleNextProject = (e) => {
    const selectedProject = counter === projects.length - 1 ? 0 : counter + 1;
    setCounter(selectedProject);
  };
  const handlePreviousProject = (e) => {
    const selectedProject = counter === 0 ? projects.length - 1 : counter - 1;
    setCounter(selectedProject);
  };

  return (
    <div
      className="row
       portfolio-container
        d-flex flex-wrap flex-row justify-content-center align-items-center 
        overflow-hidden"
    >
      <div className="portfolio-description col text-center">
        <h1 className="portfolio_title ">Portafolio</h1>
        <h3 className="portfolio_subtitle">Trabajos realizados por mi</h3>
      </div>

      <div className="col-md-8 col-10 animate__animated animate__slideInUp ">
        <Card
          {...projects.filter((p) => p.id === counter)[0]}
          handleNextProject={handleNextProject}
          handlePreviousProject={handlePreviousProject}
        />
      </div>
    </div>
  );
};

export default PortfolioPage;
