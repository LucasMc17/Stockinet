import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";

import reducer from "./reducer.js";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== "production",
  // preloadedState,
  // enhancers: [batchedSubscribe(debounceNotify)],
});
