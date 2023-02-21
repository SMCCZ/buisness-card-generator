import React from "react";
import "./Home.css";
import logo from "../../assets/logo.png";
import scanner from "../../assets/scanner.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Home">
      <div className="HomeContainer">
        <img src={logo}></img>
        <h1 className="Heading">
          Upgrade your <br />
          marketing strategy with <br />
          interactive QR codes.
        </h1>
        <p
          className="Homepara"
          onClick={() => {
            console.log("Started trying the QR...");
          }}
        >
          Try our generator now!
        </p>
      </div>
      {/* <div className="ScannerImage">
      <img width={"120px"} height={"120px"} src={scanner} alt="scanner"></img>
      </div> */}
    </div>
  );
};

export default Home;
