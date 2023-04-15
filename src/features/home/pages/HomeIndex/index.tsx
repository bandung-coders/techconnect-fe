// React
import { useCallback } from "react";

// Components
import { AppButton } from "@/features/app/components";

// Redux slice
import { authLogout } from "@/features/auth/redux/slice";

// Custom hooks
import { useAppDispatch } from "@/features/app/hooks";

const HomeIndex: React.FC = () => {
  const dispatch = useAppDispatch();

  /**
   * @description Show logout modal
   *
   * @returns void
   */
  const onClickLogout = useCallback((): void => {
    console.log("oke");
  }, [dispatch]);

  return (
    <>
      <AppButton onClick={onClickLogout} color="facebook">
        Logout
      </AppButton>
    </>
  );
};

export default HomeIndex;
