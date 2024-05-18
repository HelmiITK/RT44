import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  letter: [],
  letterById: [],
  error: null
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
    setError: (state, action) => {
      state.letter = action.payload
    }
  },
});

export const { setLetter, setLetterById, updateStatus, setError } = latterSlice.actions;

export default latterSlice.reducer;
