import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transaction: [],
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransaction: (state, action) => {
      state.transaction = action.payload;
    },
    setUpdateVerify: (state, action) => {
      state.transaction = action.payload;
    },
  },
});

export const { setTransaction, setUpdateVerify } = transactionSlice.actions;

export default transactionSlice.reducer;
