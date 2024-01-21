import { createSlice } from "@reduxjs/toolkit";
import { getListAdverts } from "./operatoins";

const rentalCarsInitState = {
  adverts: [],
  isLoading: false,
  error: "",
  page: 1,
  totalHits: 32,
  limit: 12,
  favorite: [],
  card: {},
};

const rentalCarsSlice = createSlice({
  name: "rentalCars",
  initialState: rentalCarsInitState,
  reducers: {
    setLoadMoreAdverts: (state, action) => {
      state.page = action.payload.page;
    },
    setFavorite: (state, action) => {
      state.favorite.push(action.payload);
    },
    delFavorite: (state, action) => {
      state.favorite = state.favorite.filter((e) => e.id !== action.payload.id);
    },
    setPage: (state, action) => {
      state.page = action.payload.page;
    },
    setCard: (state, action) => {
      state.card = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(getListAdverts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getListAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adverts = [...state.adverts, ...action.payload];

        state.error = "";
      })
      .addCase(getListAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});
export const { setCard } = rentalCarsSlice.actions;
export const { setPage } = rentalCarsSlice.actions;
export const { delFavorite } = rentalCarsSlice.actions;
export const { setFavorite } = rentalCarsSlice.actions;
export const { setLoadMoreAdverts } = rentalCarsSlice.actions;
export const rentalCarsReducer = rentalCarsSlice.reducer;
