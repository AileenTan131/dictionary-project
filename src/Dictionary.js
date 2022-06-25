import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleDictResponse(response) {
    setResults(response.data[0]);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
  axios.get(apiURL).then(handleDictResponse);

  function updateKeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="What would you like to search for?"
          autoFocus={true}
          onChange={updateKeyword}
          // style="width:200px"
          size="80"
        />
      </form>
      <Results results={results} />
    </div>
  );
}
