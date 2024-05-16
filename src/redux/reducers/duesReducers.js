import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dues: [],
  sukarela: [],
};

const duesSlice = createSlice({
  name: "dues",
  initialState,
  reducers: {
    setDues: (state, action) => {
      state.dues = action.payload;
    },
    setSukarela: (state, action) => {
      state.sukarela = action.payload;
    },
  },
});

export const { setDues, setSukarela } = duesSlice.actions;

export default duesSlice.reducer;
