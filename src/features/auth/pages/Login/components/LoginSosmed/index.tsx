// React
import React from "react";

// Components
import { AppButton, AppText } from "@/features/app/components";

const LoginSosmed: React.FC = () => {
  return (
    <>
      <div className="login__sosmed">
        <AppButton
          color="facebook"
          size="large"
          rounded="large"
          icon="facebook-circle-white-24x24.svg"
        >
          CONTINUE WITH FACEBOOK
        </AppButton>

        <AppButton
          color="dark-1"
          size="large"
          rounded="large"
          icon="apple-white.svg"
        >
          CONTINUE WITH APPLE
        </AppButton>

        <AppButton color="blank" size="large" rounded="large" icon="google.svg">
          CONTINUE WITH GOOGLE
        </AppButton>

        <AppButton color="blank" size="large" rounded="large">
          CONTINUE WITH PHONE NUMBER
        </AppButton>
      </div>

      <div style={{ height: "20px" }}>
        <AppText className="login__or" weight="bold">
          OR
        </AppText>
        <hr className="login__or-line" />
      </div>
    </>
  );
};

export default LoginSosmed;
