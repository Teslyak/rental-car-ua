import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65aa23df081bd82e1d962d65.mockapi.io/";

axios.defaults.params = {
  page: 1,
  limit: 12,
};

export const getListAdverts = createAsyncThunk(
  "adverts/getList",
  async ({ signal, page }, thunkAPI) => {
    try {
      const { data } = await axios.get("adverts", { signal, params: { page } });
      return data;
    } catch (erorr) {
      return thunkAPI.rejectWithValue(erorr.message);
    }
  }
);
