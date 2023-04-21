// Redux toolkit
import { combineReducers } from "@reduxjs/toolkit";

// Slices
import { popupSlice } from "@/features/app/redux/popupSlice";
import { authSlice } from "@/features/auth/redux/slice";

// RTK
import { authApi } from "@/features/auth/redux/rtk";

const plainReducers = {
  auth: authSlice.reducer,
  popup: popupSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
};

const reducers = combineReducers(plainReducers);

export { plainReducers, reducers };
