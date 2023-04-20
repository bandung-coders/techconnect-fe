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
    popupShowToast: (state) => {
      state.popup = { ...state, toast: true };
    },
  },
});

export const { popupShowToast } = popupSlice.actions;

export default popupSlice.reducer;
