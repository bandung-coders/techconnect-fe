// React
import React, { useCallback } from "react";

// React Router DOM
import { useNavigate } from "react-router-dom";

// React SVG
import { ReactSVG } from "react-svg";

// CVA
import { type IAppButtonProps, button } from "./cva";

const AppButton: React.FC<IAppButtonProps> = ({
  children,
  navigate,
  className,
  rounded,
  variant,
  size,
  disabled,
  block,
  loading,
  width,
  height,
  icon,
  type,
  onClick,
}) => {
  const navigateRoute = useNavigate();

  const buttonClassName = button({
    className,
    rounded,
    variant,
    size,
    block,
    loading,
  });

  /**
   * @description Handle button click & navigate route
   *
   * @returns void
   */
  const onClickButton = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>): void => {
      navigate !== undefined && navigateRoute(navigate);
      loading === false && onClick?.(event);
    },
    [loading, navigate, navigateRoute, onClick]
  );

  return (
    <button
      onClick={onClickButton}
      className={buttonClassName}
      style={{ width, height }}
      disabled={disabled}
      type={type}
    >
      {icon !== undefined && loading === false && (
        <ReactSVG
          src={icon}
          className="mr-3"
          wrapper="span"
          beforeInjection={(svg) => {
            svg.setAttribute(
              "style",
              "position: relative; top: 4px; left: 1px;"
            );
          }}
        />
      )}
      {loading === true && (
        <ReactSVG
          className="btn__loading"
          src="rolling-0.8s-24px.svg"
          wrapper="span"
        />
      )}
      <span>{children}</span>
    </button>
  );
};

AppButton.defaultProps = {
  type: "button",
  loading: false,
};

export default AppButton;
