import React from "react";
import "./styles.css";
import { useState } from "react";

const moviesDB = {
  "1980": [
    { name: "Airplane", rating: "7.7" },
    { name: "9 to 5", rating: "6.9" },
    { name: "The Gods Must Be Crazy", rating: "7.3" },
    { name: "Private Benjamin", rating: "6.2" },
    { name: "The Blues Brothers", rating: "7.9" }
  ],
  "1990": [
    { name: "Home Alone", rating: "7.6" },
    { name: "Back to the Future III", rating: "7.4" },
    { name: "Cry-Baby", rating: "6.5" },
    { name: "Kindergarten Cop", rating: "6.3" },
    { name: "Flashback", rating: "6.4" }
  ],
  "2000": [
    { name: "Miss Congeniality", rating: "6.3" },
    { name: "Road Trip", rating: "6.4" },
    { name: "Meet The Parents", rating: "7.4" },
    { name: "Me, Myself and Irene", rating: "6.6" },
    { name: "Shanghai Noon", rating: "6.6" }
  ],
  "2010": [
    { name: "Due Date", rating: "6.5" },
    { name: "Grown Ups", rating: "6.2" },
    { name: " Date Night", rating: "6.3" },
    { name: "The Other Guys", rating: "6.7" },
    { name: "Knight And Day", rating: "6.3" }
  ]
};

export default function App() {
  const [selectedDecade, setDecade] = useState("2010");
  function DecadeClickHandler(Decade) {
    setDecade(Decade);
  }
  return (
    <div className="App">
      <h1>
        Comedy Films of the Decade <span className="role">😂</span>
      </h1>
      <p style={{ fontSize: "large", color: "white" }}>
        {" "}
        Here are some the best comedy movies in the world. Select the decade
        from below...{" "}
      </p>

      <div>
        {Object.keys(moviesDB).map((Decade) => (
          <button className="btn" onClick={() => DecadeClickHandler(Decade)}>
            {Decade}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviesDB[selectedDecade].map((movie) => (
            <li className="list-items" key={movie.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
