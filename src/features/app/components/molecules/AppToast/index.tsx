// React
import React, { useEffect } from "react";

// React SVG
import { ReactSVG } from "react-svg";

// Components
import { AppText } from "@/features/app/components";

// Interfaces
import { toast } from "./cva";

// Custom hooks
import { useAppSelector, useToast } from "@/features/app/hooks";

const AppToast: React.FC = () => {
  const { show, type, title, description } = useAppSelector(
    (state) => state.popup.popup.toast
  );

  const toastClassName = toast({ type });
  const { hideToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      hideToast();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [hideToast]);

  /**
   * @description close toast
   *
   * @returns void
   */
  const onClose = (): void => {
    hideToast();
  };

  return (
    <>
      {show && (
        <div className={toastClassName}>
          <div className="toast__content">
            <AppText weight="bold">{title}</AppText>
            <AppText>{description}</AppText>
          </div>
          <ReactSVG
            onClick={onClose}
            className="toast__close"
            src="icon-close-16x16.svg"
          />
        </div>
      )}
    </>
  );
};

export default AppToast;
