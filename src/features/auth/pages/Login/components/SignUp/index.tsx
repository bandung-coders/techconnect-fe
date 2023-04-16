// React
import React from "react";

// Components
import { AppButton, AppText } from "@/features/app/components";

const SignUp: React.FC = () => (
  <div>
    <AppText className="text--center" weight="bold">
      Don&apos;t have an account?
    </AppText>

    <AppButton
      className="mt-5"
      color="blank"
      navigate="/signup"
      size="large"
      rounded="large"
      block
    >
      SIGN UP FOR SPOTIFY
    </AppButton>
  </div>
);

export default SignUp;
