import React from "react";
// import NavBar from "./components/ui/NavBar";
import AppRouter from "./routers/AppRouter";
import "./styles/styles.scss";

const PortfolioApp = () => {
  return (
    <>
      <div className="container-fluid vh-100 vw-100 overflow-hidden">
        <AppRouter />
      </div>
    </>
  );
};

export default PortfolioApp;
