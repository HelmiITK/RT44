import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dues: [],
  sukarela: [],
  duesTrue: [],
  duesFalse: [],
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
    setDuesTrue: (state, action) => {
      state.duesTrue = action.payload;
    },
    setDuesFalse: (state, action) => {
      state.duesFalse = action.payload;
    },
  },
});

export const { setDues, setSukarela, setDuesTrue, setDuesFalse } =
  duesSlice.actions;

export default duesSlice.reducer;
