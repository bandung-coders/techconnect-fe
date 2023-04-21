// Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popup: {
    toast: {
      type: "",
      show: false,
      title: "",
      description: "",
    },
  },
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    popupShowToast: (state, { payload }) => {
      state.popup.toast = { ...state.popup.toast, ...payload, show: true };
    },
    popupHideToast: (state) => {
      state.popup.toast = initialState.popup.toast;
    },
  },
});

export const { popupShowToast, popupHideToast } = popupSlice.actions;

export default popupSlice.reducer;
