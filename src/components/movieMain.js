import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../store/actions";

function Main(props) {
  const [movie, setMovie] = useState("");
  const searchMovies = (e) => {
    e.preventDefault();
    props
      .fetchMovies(movie)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <form className="form" onSubmit={(e) => searchMovies(e)}>
        <input
          className="search"
          value={movie}
          placeholder="Search Movie Title"
          onChange={(e) => setMovie(e.target.value)}
        />
        <button className="search-btn" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </form>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  movies: state.movies
});

export default connect(mapStateToProps, { fetchMovies })(Main);
