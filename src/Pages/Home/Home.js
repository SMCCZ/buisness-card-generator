import React from "react";
import "./Home.css";
import logo from "../../assets/logo.png";
import scanner from "../../assets/scanner.png";
const Home = () => {
  return (
    <div className="Home">
      <div className="HomeContainer">
        <img src={logo}></img>
        <h1 className="Heading">
          Upgrade your marketing strategy with interactive QR codes.
        </h1>
        <p>Try our generator now!</p>
      </div>
      <div className="ScannerImage">
      <img width={"120px"} height={"120px"} src={scanner} alt="scanner"></img>
      </div>
    </div>
  );
};

export default Home;
