import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/watchlist">WatchList</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/watchlist">Watch List</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                + Add
              </Link>
              <li>
              <Link to="/LoginPage" className="btn btn-main">
                SIGN OUT
              </Link>
            </li>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
