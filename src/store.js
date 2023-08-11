// store.js

import { configureStore } from "@reduxjs/toolkit";
import stockReportsReducer from "./stockReportsSlice";

const store = configureStore({
  reducer: {
    stockReports: stockReportsReducer,
  },
});

export default store;
