import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { cityNameSlice } from "./slices/cityNameSlice";
import { weatherDataNowSlice } from "./slices/weatherDataNowSlice";
import { weatherForecastSlice } from "./slices/weatherForecastSlice";
import { degreeUnitSlice } from "./slices/degreeSlice";

const rootReducer = combineReducers({
  cityNameReducer: cityNameSlice.reducer,
  weatherDataNowReducer: weatherDataNowSlice.reducer,
  weatherForecastReducer: weatherForecastSlice.reducer,
  degreeUnitReducer: degreeUnitSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
})