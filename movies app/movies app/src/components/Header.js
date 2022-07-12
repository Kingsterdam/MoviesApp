import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
    <header>
      <div className="container" >
        <div className="inner-content">
          <div className="brand">
            <Link to="/">MoviApp</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/searchmovies">Search Movies</Link>
            </li>
            <li>
              <Link to="/movieslist">Movies List</Link>
            </li>
            <li>
              <Link to="/watched">Watched Movies</Link>
            </li>
          </ul>
        </div>
      </div>
    </header> 
</>
  );
};

