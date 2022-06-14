import React from "react";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/watchlist">Movie Library</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/LoginPage">Login</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </header>
  );
};
