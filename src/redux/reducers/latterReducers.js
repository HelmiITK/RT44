import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  letter: [],
  letterById: [],
  letterById2: [],
  error: null,
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
    setLetterById2: (state, action) => {
      state.letterById2 = action.payload;
    },
    updateStatus: (state, action) => {
      state.letter = action.payload;
    },
    updateLatter: (state, action) => {
      state.letter = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setLetter,
  setLetterById,
  setLetterById2,
  updateStatus,
  updateLatter,
  setError,
} = latterSlice.actions;

export default latterSlice.reducer;
