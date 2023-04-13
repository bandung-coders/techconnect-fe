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
    // <form className="border-b border-gray-1 pb-1">
    //   <AppInput label="Email address or username" />

    //   <AppInput label="Password" />

    //   <AppText className="underline" weight="semibold">
    //     Forgot your password?
    //   </AppText>

    //   <div className="flex justify-between items-center mt-4">
    //     <AppCheckBox />
    //     <AppButton
    //       className="mt-10"
    //       color="spotify"
    //       size="large"
    //       rounded="large"
    //     >
    //       LOG IN
    //     </AppButton>
    //   </div>
    // </form>
    <>
      <div>wkwk</div>
      <div className="wkwk mt-6">wkwk2</div>
    </>
  );
};

export default LoginForm;
