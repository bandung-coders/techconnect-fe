import { type IUserDataResponse } from "../interfaces/api";

export interface IAuth {
  accessToken: string | null;
  userData: IUserDataResponse | Record<string, never>;
  isLogin: boolean;
}

export interface IInitAuthState {
  auth: IAuth;
}
