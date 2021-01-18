import {
  REMOVE_MOVIE,
  SET_MOVIES,
  SORT_ALPHA,
  SORT_NUMER
} from "./actionTypes";

let store = {
  movies: [],
  total: 0
};

const sortAlpha = () => {};

const sortNumer = () => {};

export default (state = store, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        movies: [...action.payload.movies],
        total: state.total + action.payload.movies.length
      };
    case REMOVE_MOVIE:
      return {
        movies: state.movies.filter(
          (movie) => movie.imdbID !== action.payload.movie.imdbID
        ),
        total: state.total - 1
      };
    case SORT_ALPHA:
      let movieSortedAlpha = sortAlpha(state.movies);
      return {
        movies: movieSortedAlpha,
        total: state.total
      };
    case SORT_NUMER:
      let movieSortedNumer = sortNumer(state.movies);
      return {
        movies: movieSortedNumer,
        total: state.total
      };
    default:
      return state;
  }
};
