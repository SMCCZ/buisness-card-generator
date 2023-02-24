import React from "react";
import "./Home.css";
import logo from "../../assets/logo.png";
import scanner from "../../assets/scanner.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Home">
      <div className="HomeContainer">
        <img src={logo} alt="logo"></img>
        <h1 className="Heading">
          Upgrade your <br />
          marketing strategy with <br />
          interactive QR codes.
        </h1>
        <Link to={"/form"}
     
          className="Homepara"
          onClick={() => {
            console.log("Started trying the QR...");
          }}
        >Try our generator now!
      
        </Link>
      </div>
    </div>
  );
};

export default Home;
