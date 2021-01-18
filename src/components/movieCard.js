import React from "react";

export default function MovieCard({ movie, deleteMovie }) {
  return (
    <tr className="movie-card">
      <td width="500px">{movie.Title}</td>
      <td width="100px">{movie.Year}</td>
      <td>{movie.imdbID}</td>
      <input
        type="button"
        value="x"
        className="movie-del"
        onClick={() => deleteMovie(movie)}
      />
    </tr>
  );
}
