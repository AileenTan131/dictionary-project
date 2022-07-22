import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [image, setImage] = useState(null);

  function handleDictResponse(response) {
    setResults(response.data[0]);
    setLoaded(true);
    //3. when loaded is true, the form gets run
  }

  function handlePexelResponse(response) {
    setImage(response.data.photos);
  }

  function search() {
    let dictionaryApiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    //2. api call runs the default keyword
    axios.get(dictionaryApiURL).then(handleDictResponse);

    let pexelApiKey =
      "563492ad6f917000010000017a39e7c70fd7414fa852c17acdbacb14";
    let pexelApiURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    axios
      .get(pexelApiURL, { headers: { Authorization: `Bearer ${pexelApiKey}` } })
      .then(handlePexelResponse);
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
        <section>
          <h5>What word do you want to look up?</h5>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              placeholder={props.defaultKeyword}
              onChange={updateKeyword}
              size="80"
            />
          </form>
          <h6>suggested keywords: dog, heavy, merry, love</h6>
        </section>
        <Results results={results} />
        <Images image={image} />
      </div> //4. onsubmit, user input gets send to api (onSubmit={handleSubmit})
      //5. onChange={updateKeyword} replaces default keyword with setKeyword state
    );
  } else {
    search(); //1. when page not loaded, i want page to run the api call
  }
}
