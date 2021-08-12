// Extrenal Imports
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";

// Local Imports
import rootReducer from "./root-reducer";

// Redux Middleware Initilization
const middlewares = [reduxThunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// Redux Store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
