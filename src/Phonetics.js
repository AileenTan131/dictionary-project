import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetics.audio} target="blank">
        Audio
      </a>
      {props.phonetics.text}
    </div>
  );
}
