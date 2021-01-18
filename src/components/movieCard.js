import React from "react";

export default function MovieCard({ movie, deleteMovie }) {
  return (
    <tr className="movie-card">
      <td width="500px">{movie.Title}</td>
      <td width="100px">{movie.Year}</td>
      <td>{movie.imdbID}</td>
      <button
        type="button"
        className="movie-del"
        onClick={() => deleteMovie(movie)}
      >
        x
      </button>
    </tr>
  );
}
