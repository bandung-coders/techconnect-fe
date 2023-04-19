import { AppText } from "@/features/app/components";

// CVA
import { type IAppInputProps, input } from "./cva";

const AppInput: React.FC<IAppInputProps> = ({
  className,
  name,
  placeholder,
  label,
  errorMessage,
  ...props
}) => {
  const inputClassName = input({ className });

  return (
    <div className="mb-5">
      {label !== undefined && (
        <AppText className="mb-2" size="small" weight="xbold">
          {label}
        </AppText>
      )}
      <input
        name={name}
        className={inputClassName}
        placeholder={placeholder}
        {...props}
      />
      {errorMessage !== undefined && (
        <AppText className="input__error-message">{errorMessage}</AppText>
      )}
    </div>
  );
};

export default AppInput;
