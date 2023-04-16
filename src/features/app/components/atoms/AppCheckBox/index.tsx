// React
import React from "react";

// Components
import { AppText } from "@/features/app/components";

// Interfaces
import { type IAppCheckBoxProps } from "./interfaces";

const AppCheckBox: React.FC<IAppCheckBoxProps> = ({ label, ...props }) => (
  <div className="d-flex gap-2 align-center">
    <input type="checkbox" {...props} />
    {label !== undefined && (
      <AppText size="small" weight="bold">
        {label}
      </AppText>
    )}
  </div>
);

export default AppCheckBox;
