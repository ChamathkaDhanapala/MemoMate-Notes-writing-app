import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import noteReducer from "./reducers/noteReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  noteReducer,
  userReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
