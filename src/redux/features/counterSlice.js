import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    dencrement: (state, action) => {
      state.value === 0 ? (state.value = 0) : (state.value -= action.payload);
    },
    reset: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { increment, dencrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
