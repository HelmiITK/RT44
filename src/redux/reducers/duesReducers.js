import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dues: [],
};

const duesSlice = createSlice({
  name: "dues",
  initialState,
  reducers: {
    setDues: (state, action) => {
      state.dues = action.payload;
    },
  },
});

export const { setDues } = duesSlice.actions;

export default duesSlice.reducer;
