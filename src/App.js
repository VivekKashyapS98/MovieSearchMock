import React from "react";
import { Provider } from "react-redux";
import Main from "./components/movieMain";
import MovieList from "./components/movieList";
import { configureStore } from "./store";

import "./styles.css";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
        <br />
        <MovieList />
      </div>
    </Provider>
  );
}
