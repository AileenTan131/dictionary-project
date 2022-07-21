import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleDictResponse(response) {
    setResults(response.data[0]);
    setLoaded(true);
    //3. when loaded is true, the form gets run
  }

  function search() {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    //2. api call runs the default keyword
    axios.get(apiURL).then(handleDictResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    //Note: Search() section cannot be integrated to the else section, for handleSubmit requires api call too.
  }

  function updateKeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="What would you like to search for?"
            autoFocus={true}
            onChange={updateKeyword}
            size="80"
          />
        </form>
        <Results results={results} />
      </div> //4. onsubmit, user input gets send to api (onSubmit={handleSubmit})
      //5. onChange={updateKeyword} replaces default keyword with setKeyword state
    );
  } else {
    search(); //1. when page not loaded, i want page to run the api call
  }
}
