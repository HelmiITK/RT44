import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: null,
  error: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      if (action.payload) {
        localStorage.setItem("token", action.payload);
      } else {
        localStorage.removeItem("token");
      }
      state.token = action.payload;
    },
    // setUser: (state, action) => {
    //   if (action.payload === null) {
    //     localStorage.removeItem("token");
    //     state.token = null;
    //   }
    //   state.user = action.payload;
    // },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
