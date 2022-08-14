import { createSlice } from "@reduxjs/toolkit";
import store from "store";

const initialState = {
  city: "",
};

export const cityNameSlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    installCityName: (state, action) => {
      state.city = action.payload;
      store.set("cityName", action.payload);
    },
  },
});

export const { installCityName } = cityNameSlice.actions;
