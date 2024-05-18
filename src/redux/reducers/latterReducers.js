import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  letter: [],
  letterById: [],
};

const latterSlice = createSlice({
  name: "latter",
  initialState,
  reducers: {
    setLetter: (state, action) => {
      state.letter = action.payload;
    },
    setLetterById: (state, action) => {
      state.letterById = action.payload;
    },
    updateStatus: (state, action) => {
      state.letter = action.payload;
    },
  },
});

export const { setLetter, setLetterById, updateStatus } = latterSlice.actions;

export default latterSlice.reducer;
