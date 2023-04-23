// React
import React from "react";

// Components
import { AppText } from "@/features/app/components";

// Interfaces
import { type IAppCheckBoxProps } from "./interfaces";

const AppCheckBox: React.FC<IAppCheckBoxProps> = ({ label, ...props }) => (
  <label className="d-flex gap-2 align-center">
    <input type="checkbox" {...props} />
    {label !== undefined && (
      <AppText size="small" weight="bold">
        {label}
      </AppText>
    )}
  </label>
);

export default AppCheckBox;
