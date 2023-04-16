// React
import React, { useCallback } from "react";

// Components
import {
  AppButton,
  AppCheckBox,
  AppInput,
  AppText,
} from "@/features/app/components";

// Interfaces
import { type ILoginBody } from "@/features/auth/interfaces/api";

// Custom hooks
import { useAuth } from "@/features/auth/hooks";
import { useAppDispatch } from "@/features/app/hooks";
import { authSetAuthenticatedUser } from "@/features/auth/redux/slice";

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { login } = useAuth();

  /**
   * @description On submit login form
   *
   * @param values ILoginFormValues
   *
   * @returns Promise<void>
   */
  const onFinish = useCallback(
    async (values: ILoginBody): Promise<void> => {
      try {
        const response = await login({ body: values }).unwrap();
        dispatch(authSetAuthenticatedUser(response));
      } catch (error) {
        //
      }
    },
    [dispatch, login]
  );

  return (
    <form className="login__form">
      <AppInput
        label="Email address or username"
        placeholder="Email address or username"
      />

      <AppInput label="Password" placeholder="Password" />

      <AppText className="text--underline">Forgot your password?</AppText>

      <div className="d-flex justify-between align-center mt-4">
        <AppCheckBox label="Remember me" />

        <AppButton color="spotify" width="121px" size="large" rounded="large">
          LOG IN
        </AppButton>
      </div>
    </form>
  );
};

export default LoginForm;
