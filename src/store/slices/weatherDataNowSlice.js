import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weatherDataNow: {},
};

export const weatherDataNowSlice = createSlice({
  name: "weather_data_now",
  initialState,
  reducers: {
    installWeatherDataNow: (state, action) => {
      state.weatherDataNow = action.payload;
    },
  },
});

export const { installWeatherDataNow } = weatherDataNowSlice.actions;
