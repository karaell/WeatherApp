import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tempScale: "C",
};

export const tempScaleSlice = createSlice({
  name: "temp_scale",
  initialState,
  reducers: {
    setTempScale: (state, action) => {
      state.tempScale = action.payload;
    },
  },
});

export const {setTempScale} = tempScaleSlice.actions;
