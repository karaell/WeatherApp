import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { cityNameSlice } from "./slices/cityNameSlice";
import { weatherDataNowSlice } from "./slices/weatherDataNowSlice";

const rootReducer = combineReducers({
  cityNameReducer: cityNameSlice.reducer,
  weatherDataNowReducer: weatherDataNowSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
})