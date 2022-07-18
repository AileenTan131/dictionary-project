import React from "react";

import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <strong>Definition:</strong>
            <span> {definition.definition}</span>
            <br />
            <strong>Example:</strong>
            <em>{definition.example}</em>
            <Synonyms synonymsList={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
