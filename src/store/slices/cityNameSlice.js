import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    city: "",
}

export const cityNameSlice = createSlice({
    name: "city",
    initialState,
    reducers: {
        installCityName: (state, action) => {
            state.city = action.payload;
        }
    }
})

export const { installCityName } = cityNameSlice.actions;