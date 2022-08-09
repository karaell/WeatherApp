import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { cityNameSlice } from "./slices/cityNameSlice";

const rootReducer = combineReducers({
    cityNameReducer: cityNameSlice.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
})