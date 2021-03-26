import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import starWarsLike  from "./StarWarsLike"


const store = createStore(
starWarsLike,
[],
compose(applyMiddleware(createLogger()))
);

export default store;



