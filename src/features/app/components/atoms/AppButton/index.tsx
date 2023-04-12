// React
import React, { useCallback } from "react";

// React Router DOM
import { useNavigate } from "react-router-dom";

// CVA
import { type IAppButtonProps, button } from "./cva";

const AppButton: React.FC<IAppButtonProps> = ({
  children,
  navigate,
  className,
  rounded,
  color,
  size,
  disabled,
  onClick,
}) => {
  const navigateRoute = useNavigate();

  const buttonClassName = button({
    className,
    rounded,
    color,
    size,
  });

  /**
   * @description Handle button click & navigate route
   *
   * @returns void
   */
  const onClickButton = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>): void => {
      navigate !== undefined && navigateRoute(navigate);
      onClick?.(event);
    },
    [navigate, navigateRoute, onClick]
  );

  return (
    <button
      onClick={onClickButton}
      className={buttonClassName}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default AppButton;
