// React
import React from "react";

// Components
import { AppButton, AppText } from "@/features/app/components";

const LoginSosmed: React.FC = () => {
  return (
    <>
      <div className="login__sosmed">
        <AppButton color="facebook" size="large" rounded="large">
          CONTINUE WITH FACEBOOK
        </AppButton>

        <AppButton color="dark-1" size="large" rounded="large">
          CONTINUE WITH APPLE
        </AppButton>

        <AppButton color="blank" size="large" rounded="large">
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
