import { combineReducers } from "@reduxjs/toolkit";
import PatternSlice from "./reducers/Patterns/PatternSlice.js";

export default combineReducers({
  patterns: PatternSlice,
});
