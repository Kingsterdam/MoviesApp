import React, { useState } from "react";
import { ResultCard } from "./ResultCard";
export default function Add() {
 
   const API_KEY = "c21d576bbbddc94ffed385d383a4c0b9";
  
  const [movies, setMovies] = useState("");
  const [results, setResults] = useState([]);

  const onSearchMovies = (e) => {
    e.preventDefault();
     let moveisTitle = e.target.value 
    setMovies(moveisTitle);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${moveisTitle}`
    ).then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          console.log(data.results)
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

return (
  <div className="add-page">
    <div className="container">
      <div className="add-content">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Search a movie"
            value={movies}
            onChange={onSearchMovies}
          />
        </div>

        {results.length > 0 && (
          <ul className="results">
            {results.map((movie) => (
              <li key={movie.id}>
                <ResultCard movie={movie} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
);
};
