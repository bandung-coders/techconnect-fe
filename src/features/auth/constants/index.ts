// Interfaces
import { type IInitAuthState } from "../interfaces/slice";

export const INIT_AUTH_STATE: IInitAuthState = {
  auth: {
    accessToken: null,
    userData: {},
    isLogin: false,
  },
};
