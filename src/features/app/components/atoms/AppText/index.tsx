// React
import React, { useCallback } from "react";

// CVA
import { text, type IAppTextProps } from "./cva";

const AppText: React.FC<IAppTextProps> = ({
  children,
  className,
  size,
  weight,
  onClick,
}) => {
  const textClassName = text({ className, size, weight });

  const onClickText = useCallback((): void => {
    onClick?.();
  }, [onClick]);

  return (
    <div onClick={onClickText} className={textClassName}>
      {children}
    </div>
  );
};

export default AppText;
