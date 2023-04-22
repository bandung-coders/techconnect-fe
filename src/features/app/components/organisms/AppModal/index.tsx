import React from "react";
import { AppButton, AppText } from "@/features/app/components";
import { ReactSVG } from "react-svg";

const AppModal: React.FC = ({ show, onClose, onSubmit }) => {
  return (
    <>
      {show && (
        <div className="modal">
          <div className="modal__card">
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
            <div className="modal__content">
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                consequuntur, soluta libero enim praesentium laudantium in
                possimus architecto quo quaerat veritatis repellat iste dolorum
                dolorem quidem? Odit perferendis quos possimus.
              </div>
            </div>
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
