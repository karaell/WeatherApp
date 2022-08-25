import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  degreeUnit: "C",
};

export const degreeUnitSlice = createSlice({
  name: "degree_unit",
  initialState,
  reducers: {
    setUnitDegree: (state, action) => {
      state.degreeUnit = action.payload;
    },
  },
});

export const {setUnitDegree} = degreeUnitSlice.actions;
