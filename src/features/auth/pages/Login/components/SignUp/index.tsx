// React
import React from "react";

// Components
import { AppButton, AppText } from "@/features/app/components/base";

const SignUp: React.FC = () => (
  <div>
    <AppText size="large" weight="semibold" align="center">
      Don&apos;t have an account?
    </AppText>

    <AppButton
      className="mt-5"
      navigate="/signup"
      size="large"
      rounded="large"
    >
      SIGN UP FOR SPOTIFY
    </AppButton>
  </div>
);

export default SignUp;
