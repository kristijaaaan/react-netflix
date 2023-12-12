import { useEffect, useState } from "react";
import requests from "../requests";
import "./Banner.css";

export default function Banner() {
  const [movies, setMovies] = useState([]);
  const movie = movies[0];

  useEffect(() => {
    fetch(requests.fetchTrending)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [requests]);

  function truncateString(string, num) {
    if (string?.length > num) return string?.slice(0, num - 1) + "...";
    else return string;
  }

  return (
    <div className="banner">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="banner__container">
        <h1>{movie?.title}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button btn__transparent">
            Watch Later
          </button>
        </div>
        <div className="banner__info">
          <p>Released: {movie?.release_date}</p>
          <p>{truncateString?.(movie?.overview, 150)}</p>
        </div>
      </div>
      <div className="banner__overlay" />
    </div>
  );
}
