import { REMOVE_MOVIE, SET_MOVIES } from "./actionTypes";

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

export const removeMovie = (movie) => (dispatch) => {
  dispatch({
    type: REMOVE_MOVIE,
    payload: {
      movie
    }
  });
};
