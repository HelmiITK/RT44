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
  },
});

export const { setTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
