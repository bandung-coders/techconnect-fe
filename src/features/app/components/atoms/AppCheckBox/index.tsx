// React
import React from "react";

// Interfaces
import { type IAppCheckBoxProps } from "./interfaces";

const AppCheckBox: React.FC<IAppCheckBoxProps> = ({  ...props }) => (
  <input type="checkbox" {...props} />
);

export default AppCheckBox;
