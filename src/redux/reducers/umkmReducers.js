import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  umkm: [],
  umkmbyId: [],
};

const umkmSlice = createSlice({
  name: "umkm",
  initialState,
  reducers: {
    setUmkm: (state, action) => {
      state.umkm = action.payload;
    },
    setUmkmById: (state, action) => {
      state.umkmbyId = action.payload;
    },
    updateUmkm: (state, action) => {
      const updatedUmkm = action.payload;
      state.umkm = state.umkm.map((umkm) =>
        umkm.id === updatedUmkm.id ? updatedUmkm : umkm
      );
    },
    deleteUmkm: (state, action) => {
      state.umkm = state.umkm.filter((umkm) => umkm.id !== action.payload);
    },
  },
});

export const { setUmkm, setUmkmById, updateUmkm, deleteUmkm } =
  umkmSlice.actions;

export default umkmSlice.reducer;
