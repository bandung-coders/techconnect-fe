// Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popup: {
    toast: false,
  },
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    popupShowToast: (state) => {
      console.log(true);
      state.popup = { ...state.popup, toast: true };
    },
    popupHideToast: (state) => {
      state.popup = { ...state.popup, toast: false };
    },
  },
});

export const { popupShowToast, popupHideToast } = popupSlice.actions;

export default popupSlice.reducer;
