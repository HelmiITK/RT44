import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  letter: [],
};

const latterSlice = createSlice({
  name: "latter",
  initialState,
  reducers: {
    setLetter: (state, action) => {
      state.letter = action.payload;
    },
  },
});

export const { setLetter } = latterSlice.actions;

export default latterSlice.reducer;
