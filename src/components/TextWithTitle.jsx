import React from "react";
import Link from "@mui/material/Link";

function TextWithTitle(props) {
  return (
    <div>
      <h1 style={{maxWidth: "250px"}}>{props.title}</h1>
      <p  style={{maxWidth: "465px"}}>{props.text}</p>
      <Link href="#" underline="always">
        {props.link}
      </Link>
    </div>
  );
}

export default TextWithTitle;
