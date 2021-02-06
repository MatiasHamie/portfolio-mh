import React from "react";
// import NavBar from "./components/ui/NavBar";
import AppRouter from "./routers/AppRouter";
import "./styles/styles.scss";

const PortfolioApp = () => {
  return (
    <>
      <div className="container-fluid h-100 vh-100 vw-100">
        <AppRouter />
      </div>
    </>
  );
};

export default PortfolioApp;
