// React
import React, { useCallback } from "react";

// React Router DOM
import { useNavigate } from "react-router-dom";

// CVA
import { button, type IAppButtonProps } from "./cva";

const AppButton: React.FC<IAppButtonProps> = ({
  children,
  navigate,
  className,
  rounded,
  color,
  ...props
}) => {
  const navigateRoute = useNavigate();

  const buttonClassName = button({
    className,
    rounded,
    color,
  });

  /**
   * @description Handle navigate route
   *
   * @returns void
   */
  const onClickButton = useCallback((): void => {
    if (navigate != null) {
      navigateRoute(navigate);
    }
  }, [navigateRoute, navigate]);

  return (
    <button
      onClick={onClickButton}
      className={buttonClassName}
      {...props}
    >
      {children}
    </button>
  );
};

export default AppButton;
