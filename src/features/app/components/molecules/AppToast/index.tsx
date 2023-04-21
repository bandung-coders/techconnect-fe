// React
import React, { useEffect, useState } from "react";

// React SVG
import { ReactSVG } from "react-svg";

// Components
import { AppText } from "@/features/app/components";

// Interfaces
import { toast, type IAppToast } from "./cva";

// Custom hooks
import { useAppSelector, useToast } from "@/features/app/hooks";

const AppToast: React.FC<IAppToast> = ({ type, title, description }) => {
  const toastClassName = toast({ type });
  const isShowToast = useAppSelector((state) => state.popup.popup.toast);
  const { hideToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      hideToast();
    }, 100000);

    return () => {
      clearTimeout(timer);
    };
  }, [hideToast]);

  /**
   * @description close toast
   *
   * @returns void
   */

  useEffect(() => {
    console.log(isShowToast);
  }, [isShowToast]);

  const onClose = (): void => {
    console.log(isShowToast);
    hideToast();
  };

  return (
    <>
      {isShowToast === true && (
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
