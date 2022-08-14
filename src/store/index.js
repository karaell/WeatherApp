import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { cityNameSlice } from "./slices/cityNameSlice";
import { weatherDataNowSlice } from "./slices/weatherDataNowSlice";
import { weatherForecastSlice } from "./slices/weatherForecastSlice";

const rootReducer = combineReducers({
  cityNameReducer: cityNameSlice.reducer,
  weatherDataNowReducer: weatherDataNowSlice.reducer,
  weatherForecastReducer: weatherForecastSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
})