// Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Constants
import { INIT_AUTH_STATE } from "../constants";

export const authSlice = createSlice({
  name: "auth",
  initialState: INIT_AUTH_STATE,
  reducers: {
    authSetAuthenticatedUser: (state, { payload }) => {
      state.auth = { ...state, ...payload, isLogin: true };
    },
    authLogout: (state) => {
      state.auth = INIT_AUTH_STATE.auth;
    },
  },
});

export const { authSetAuthenticatedUser, authLogout } = authSlice.actions;

export default authSlice.reducer;
