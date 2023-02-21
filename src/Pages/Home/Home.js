import React from "react";
import './Home.css'
import logo from "../../assets/logo.png";
const Home = () => {
  return (
    <div className="HomeContainer">
      <img src={logo} ></img>
      <h1 className="Heading">
      Upgrade your marketing strategy with interactive QR codes.
      </h1>
      <p>
      Try our generator now!
      </p>
    </div>
  );
};

export default Home;
