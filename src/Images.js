import React from "react";

import "./Images.css";

export default function Images(props) {
  console.log(props.image);
  if (props.image) {
    return (
      <section className="Images">
        <div className="row">
          {props.image.map(function (image, index) {
            return (
              <div className="col-3 columns" key={index}>
                <a href={image.src.original} target="_blank">
                  <img
                    src={image.src.tiny}
                    className="img-fluid"
                    alt="word-search-images"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
