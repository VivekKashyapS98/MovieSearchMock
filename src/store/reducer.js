import {
  REMOVE_MOVIE,
  SET_MOVIES,
  SORT_ALPHA,
  SORT_YEAR,
  SORT_ID
} from "./actionTypes";

let store = {
  movies: [],
  total: 0
};

//Sort an array of objects based on their nomes, alphabetically...
const sortAlpha = (movies) => {
  let sorted = movies.sort((a, b) => a.imdbID.localeCompare(b.imdbID));
  console.log(sorted);
  return sorted;
};

//Sort the array of objects based on the Year and ID...
const sortNumer = (movies, type) => {
  let sortedMovies = null;
  if (type === SORT_YEAR) {
    sortedMovies = movies.sort((a, b) => (a.Year > b.Year ? 1 : -1));
  } else if (type === SORT_ID) {
    sortedMovies = movies.sort((a, b) => (a.Year > b.Year ? 1 : -1));
  }
  console.log(sortedMovies);
  return sortedMovies;
};

//Reducer Function...
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
    case SORT_YEAR:
      let movieSortedYear = sortNumer(state.movies, SORT_YEAR);
      return {
        movies: movieSortedYear,
        total: state.total
      };
    case SORT_ID:
      let movieSortedID = sortNumer(state.movies, SORT_ID);
      return {
        movies: movieSortedID,
        total: state.total
      };
    default:
      return state;
  }
};
