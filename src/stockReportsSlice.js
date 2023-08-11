import { createSlice } from "@reduxjs/toolkit";

const stockReportsSlice = createSlice({
  name: "stockReports",
  initialState: [],
  reducers: {
    setStockReports: (state, action) => action.payload,
  },
});

export const { setStockReports } = stockReportsSlice.actions;

export default stockReportsSlice.reducer;
