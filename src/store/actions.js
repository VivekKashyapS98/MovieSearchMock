import {
  REMOVE_MOVIE,
  SET_MOVIES,
  SORT_ALPHA,
  SORT_ID,
  SORT_YEAR
} from "./actionTypes";

//Fetch movies from the API...
export const fetchMovies = (queryString) => (dispatch) => {
  return new Promise((resolve, reject) => {
    fetch(
      ` https://jsonmock.hackerrank.com/api/movies/search/?Title=${queryString}`
    )
      .then((data) => data.json())
      .then((res) => {
        dispatch({
          type: SET_MOVIES,
          payload: {
            movies: res.data
          }
        });
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};

//Remove the clicked movie...
export const removeMovie = (movie) => (dispatch) => {
  dispatch({
    type: REMOVE_MOVIE,
    payload: {
      movie
    }
  });
};

export const sortAlpha = () => (dispatch) => {
  dispatch({
    type: SORT_ALPHA
  });
  console.log("dispatched");
};

export const sortNumer = (type) => (dispatch) => {
  if (type === "year") {
    dispatch({
      type: SORT_YEAR
    });
  } else if (type === "ID") {
    dispatch({
      type: SORT_ID
    });
  }
  console.log("dispatched");
};
