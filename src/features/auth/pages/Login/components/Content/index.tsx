// React
import React from "react";

// Interfaces
import { type IContentProps } from "./interfaces";

const Content: React.FC<IContentProps> = ({ children }) => (
  <div className="login__content">
    <div className="login__content-inner">{children}</div>
  </div>
);

export default Content;
