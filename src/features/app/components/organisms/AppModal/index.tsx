// React
import React from "react";

// React SVG
import { ReactSVG } from "react-svg";

// Components
import { AppButton, AppText } from "@/features/app/components";

// Interfaces
import { modal, type IAppModalProps } from "./cva";

const AppModal: React.FC<IAppModalProps> = ({
  children,
  show,
  size,
  onClose,
  onSubmit,
}) => {
  const modalCardClassName = modal({ size });

  return (
    <>
      {show && (
        <div className="modal">
          <div className={modalCardClassName}>
            <div className="modal__header">
              <AppText
                className="modal__title"
                size="2xlarge"
                weight="semibold"
              >
                Edit User
              </AppText>
              <ReactSVG
                onClick={onClose}
                className="modal__close"
                src="icon-close-20x20.svg"
              />
            </div>
            <div className="modal__content">{children}</div>
            <div className="modal__footer">
              <AppButton onClick={onSubmit} width="100px" height="40px">
                Ubah
              </AppButton>
              <AppButton onClick={onClose} width="100px" height="40px">
                Batal
              </AppButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppModal;
