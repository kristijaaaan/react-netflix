import { useEffect } from "react";
import { useState } from "react";
import "./Row.css";

export default function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results.slice(10)));
  }, [fetchURL]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
            src={`https://image.tmdb.org/t/p/w500/${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
          />
        ))}
      </div>
    </div>
  );
}
