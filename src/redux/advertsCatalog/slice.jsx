import { createSlice } from "@reduxjs/toolkit";
import { getListAdverts } from "./operatoins";

const rentalCarsInitState = {
  adverts: [],
  isLoading: false,
  error: "",
};

const rentalCarsSlice = createSlice({
  name: "rentalCars",
  initialState: rentalCarsInitState,

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

export const rentalCarsReducer = rentalCarsSlice.reducer;
