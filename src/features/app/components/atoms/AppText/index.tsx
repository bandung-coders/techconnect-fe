// CVA
import { text, type IAppTextProps } from "./cva";

const AppText: React.FC<IAppTextProps> = ({
  children,
  className,
  size,
  weight,
  align,
}) => {
  const textClassName = text({ className, size, weight, align });

  return <div className={textClassName}>{children}</div>;
};

export default AppText;
