// Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Constants
const initialState = {
  popup: {
    toast: false,
  },
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    popupSetToast: (state, { payload }) => {
      state.popup = { ...state, ...payload };
    },
  },
});

export const { popupSetToast } = popupSlice.actions;

export default popupSlice.reducer;
