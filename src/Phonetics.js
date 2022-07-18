import React from "react";

export default function Phonetics(props) {
  console.log(props);
  return (
    <div className="phonetics">
      <a href={props.phonetics.audio} target="blank">
        Audio
      </a>
      {props.phonetics.text}
    </div>
  );
}
