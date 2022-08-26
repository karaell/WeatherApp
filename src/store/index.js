import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { cityNameSlice } from "./slices/cityNameSlice";
import { weatherDataNowSlice } from "./slices/weatherDataNowSlice";
import { weatherForecastSlice } from "./slices/weatherForecastSlice";
import { tempScaleSlice } from "./slices/degreeSlice";

const rootReducer = combineReducers({
  cityNameReducer: cityNameSlice.reducer,
  weatherDataNowReducer: weatherDataNowSlice.reducer,
  weatherForecastReducer: weatherForecastSlice.reducer,
  tempScaleReducer: tempScaleSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
})