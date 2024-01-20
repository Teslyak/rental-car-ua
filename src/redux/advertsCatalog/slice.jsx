import { createSlice } from "@reduxjs/toolkit";
import { getListAdverts } from "./operatoins";

const rentalCarsInitState = {
  adverts: [],
  isLoading: false,
  error: "",
  page: 1,
  limit: 12,
};

const rentalCarsSlice = createSlice({
  name: "rentalCars",
  initialState: rentalCarsInitState,
  reducers: {
    setLoadMoreAdverts: (state, action) => {
      state.page = action.payload.page;
      //state.limit = action.payload.limit;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getListAdverts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getListAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adverts = action.payload;
        state.error = "";
      })
      .addCase(getListAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setLoadMoreAdverts } = rentalCarsSlice.actions;
export const rentalCarsReducer = rentalCarsSlice.reducer;
