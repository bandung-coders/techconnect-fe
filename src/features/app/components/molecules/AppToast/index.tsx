// React
import React, { useEffect, useState } from "react";

// React SVG
import { ReactSVG } from "react-svg";

// Components
import { AppText } from "@/features/app/components";

// Interfaces
import { toast, type IAppToast } from "./cva";

const AppToast: React.FC<IAppToast> = ({ type, title, description }) => {
  const toastClassName = toast({ type });
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 100000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const onClose = (): void => {
    setShowToast(false);
  };

  return (
    <>
      {showToast && (
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
