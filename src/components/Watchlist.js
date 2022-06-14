import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
import { Link } from "react-router-dom";
export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-page my-0">
      <div className="container-fluid ">
      <header>
      <div className="container-fluid">
        <div className="inner-content">
          <div className="brand">
            <Link to="/watchlist">My List</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/watchlist">My List</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                + Add
              </Link>
             
            </li>
            <li>
              <Link to="/LoginPage" className="btn btn-main">
                SIGN OUT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
        <div className="header">
          <h1 className="heading">My Watchlist</h1>

          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
