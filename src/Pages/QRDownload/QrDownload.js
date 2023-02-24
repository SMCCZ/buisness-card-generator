import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import QRCode from "react-qr-code";
import buttonStyle from "../../Components/styles";
import logo from "../../assets/logo.png";
function QRDownload(params) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "16px",
      }}
    >
      <div
        style={{
          margin: "32px",
          maxWidth: "320px",
          maxHeight: "560px",
          padding: "32px",
          background: "white",
          borderRadius: "32px",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        {" "}
        <h1>Your QR is generated</h1>
        <QRCode
          size={256}
          value={""}
          viewBox={`0 0 256 256`}
        />{" "}
        <p>Best wises from</p>
        <img
          src="https://www.cloudcraftz.com/wp-content/uploads/2020/12/Cloudcraftz_logo-e1608656227668.png"
          alt="logo"
        ></img>
      </div>

      <div>
        {" "}
        <Link to="/home">
          <Button variant="outlined" style={buttonStyle} onClick={(e) => {}}>
            Retry{" "}
          </Button>
        </Link>{" "}
        <Link to="/home">
          <Button variant="outlined" style={buttonStyle} onClick={(e) => {}}>
            Download{" "}
          </Button>
        </Link>{" "}
      </div>
    </div>
  );
}

export default QRDownload;
