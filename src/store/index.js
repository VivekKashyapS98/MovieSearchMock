import { createStore, applyMiddleware, compose } from "redux";
import Reducer from "./reducer";
import thunk from "redux-thunk";

export function configureStore() {
  const store = createStore(
    Reducer,
    compose(
      applyMiddleware(thunk)
      // window.__REDUX_DEVTOOLS_EXTENSION__ &&
      //   window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
}
