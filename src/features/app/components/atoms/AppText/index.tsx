// CVA
import { text, type IAppTextProps } from "./cva";

const AppText: React.FC<IAppTextProps> = ({
  children,
  className,
  size,
  weight,
  align,
  ...props
}) => {
  const textClassName = text({ className, size, weight, align });

  return (
    <div className={textClassName} {...props}>
      {children}
    </div>
  );
};

export default AppText;
