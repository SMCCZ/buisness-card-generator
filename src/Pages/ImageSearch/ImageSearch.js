import { padding } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

function ReverseImageSearch() {
  const yandex = "https://yandex.com/images/search?rpt=imageview&url=";
  const url =
    "https://i.pinimg.com/originals/13/8e/c1/138ec1be54a7ef6b9eee25fb48c4597d.jpg";
  return (
    <div
      style={{
        padding: "32px",
        background: "yellow",
        maxWidth: "120px",
        margin: "32px",
      }}
    >
      <a target="_blank" href={`${yandex}${url}`}>
        Yandex
      </a>
    </div>
  );
}

export default ReverseImageSearch;
