import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  userbyId: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserById: (state, action) => {
      state.userbyId = action.payload;
    },
    deleteUser: (state, action) => {
      state.user = state.user.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload;
      state.user = state.user.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      );
    },
  },
});

export const { setUser, setUserById, deleteUser, updateUser } =
  userSlice.actions;

export default userSlice.reducer;
