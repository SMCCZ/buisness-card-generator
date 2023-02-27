import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="HomeContainer">
        <h1 className="Heading">
          Upgrade your <br />
          marketing strategy with <br />
          interactive QR codes.
        </h1>
        <Link
          to={"/form"}
          className="Homepara"
          onClick={() => {
            console.log("Started trying the QR...");
          }}
        >
          Try our generator now!
        </Link>
      </div>
    </div>
  );
};

export default Home;
