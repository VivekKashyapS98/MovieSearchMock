import React, { useState } from "react";
import { connect } from "react-redux";
import { removeMovie, sortAlpha, sortNumer } from "../store/actions";
import MovieCard from "./movieCard";

function MovieList(props) {
  const [val, setVal] = useState(0);
  const deleteMovie = (movie) => {
    props.removeMovie(movie);
  };

  //movie list...
  const movie_list = props.movies.map((item, index) => {
    return (
      <MovieCard
        key={index}
        movie={item}
        deleteMovie={(movie) => deleteMovie(movie)}
      />
    );
  });

  const sortNames = () => {
    console.log("Clicked");
    props.sortAlpha();
    setVal(val + 1);
  };

  const sortNumerical = (type) => {
    console.log("Clicked");
    props.sortNumer(type);
    setVal(val + 1);
  };

  return (
    <table width="100%" height="50%" className="movie-list">
      <tr
        style={{ padding: "0 0 0 100px", width: "900px" }}
        className="movie-head"
      >
        <div width="500px" className="movie-head">
          <th>
            Movie{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
              onClick={() => sortNames()}
            >
              <path
                fillRule="evenodd"
                d="M10.082 5.629L9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
              />
              <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
            </svg>
          </th>
        </div>
        <div className="movie-head">
          <th>
            Year{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              onClick={() => sortNumerical("year")}
            >
              <path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z" />
              <path
                fillRule="evenodd"
                d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"
              />
              <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
            </svg>
          </th>
        </div>
        <div className="movie-head">
          <th>
            imdbID{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              onClick={() => sortNumerical("ID")}
            >
              <path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z" />
              <path
                fillRule="evenodd"
                d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"
              />
              <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
            </svg>
          </th>
        </div>
        <p></p>
      </tr>
      {movie_list}
    </table>
  );
}

const mapStateToProps = (state) => ({
  movies: state.movies
});

export default connect(mapStateToProps, { removeMovie, sortAlpha, sortNumer })(
  MovieList
);
