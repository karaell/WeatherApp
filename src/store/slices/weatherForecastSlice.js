import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weatherForecast: [],
};

export const weatherForecastSlice = createSlice({
  name: "weather_forecast",
  initialState,
  reducers: {
    installWeatherForecast: (state, action) => {
      state.weatherForecast = action.payload;
    },
  },
});

export const { installWeatherForecast } = weatherForecastSlice.actions;
