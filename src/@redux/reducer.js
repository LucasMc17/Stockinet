import { combineReducers } from "@reduxjs/toolkit";
import PatternSlice from "./reducers/Patterns/PatternSlice.js";
import UserSlice from "./reducers/User/UserSlice.js";
import AuthorSlice from "./reducers/Authors/AuthorSlice.js";

export default combineReducers({
  patterns: PatternSlice,
  user: UserSlice,
  authors: AuthorSlice,
});
