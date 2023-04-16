import { AppText } from "@/features/app/components";

// CVA
import { type IAppInputProps, input } from "./cva";

const AppInput: React.FC<IAppInputProps> = ({
  className,
  placeholder,
  label,
  ...props
}) => {
  const inputClassName = input({ className });

  return (
    <div className="mb-5">
      {label !== undefined && (
        <AppText className="mb-2" weight="xbold">
          {label}
        </AppText>
      )}
      <input className={inputClassName} placeholder={placeholder} {...props} />
    </div>
  );
};

export default AppInput;
