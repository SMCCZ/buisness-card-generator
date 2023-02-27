import React from "react";
import "./Form.css";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import buttonStyle from "../../Components/styles";
import Header from "../Header/Header";

const BusisnessForm = () => {
  const textStyle = {
    background: "#89A3D0",
    borderRadius: "8px",
    marginBottom: "8px",
  };
  return (
    <div className="Form">
      <Header />
      <h1 className="FormHeading">Enter your personal information</h1>
      <div
        style={{
          display: "flex",
        }}
      >
        <TextField
          fullWidth
          id="first-name"
          label="Enter your first name"
          variant="outlined"
          style={{
            background: "#89A3D0",
            borderRadius: "8px",
            marginBottom: "8px",
            marginRight:"16px"
          }}
        />
        <TextField
          fullWidth
          id="last-name"
          label="Enter your last name"
          variant="outlined"
          style={textStyle}
        />
      </div>
      <div>
        <TextField
          fullWidth
          id="phone"
          label="Enter phone"
          variant="outlined"
          style={textStyle}
        />
      </div>{" "}
      <div >
        <TextField
          fullWidth
          id="email"
          label="Enter your email"
          variant="outlined"
          style={textStyle}
        />
      </div>{" "}
      <div>
        <TextField
          fullWidth
          id="company"
          label="Enter your Company"
          variant="outlined"
          style={textStyle}
        />
      </div>
      <div></div>
      <Link to="/download">
        <Button
          variant="outlined"
          style={buttonStyle}
          onClick={(e) => {
            let name = document.getElementById("first-name");
            let email = document.getElementById("email");
            let phone = document.getElementById("phone");
            let company = document.getElementById("company");
            name.value = company.value;
            console.log(name.value, email.value, phone.value, company.value);
          }}
        >
          Submit{" "}
        </Button>
      </Link>{" "}
    </div>
  );
};

export default BusisnessForm;
