// React
import React from "react";

// Components
import { AppButton, AppText } from "@/features/app/components";

const LoginSosmed: React.FC = () => (
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

    <div>
      <AppText className="login__content-inner-bottom" weight="semibold">
        OR
      </AppText>
      <hr className="relative bottom-4 z-0 text-gray-1" />
    </div>
  </>
);

export default LoginSosmed;
