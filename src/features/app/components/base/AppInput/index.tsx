import { AppText } from "@/features/app/components/base";

// CVA
import { type IAppInputProps } from "./cva";

const AppInput: React.FC<IAppInputProps> = ({ label, ...props }) => (
  <div>
    {label != null && (
      <AppText className="mb-2" size="sm" weight="bold">
        {label}
      </AppText>
    )}
    <input {...props} />
  </div>
);

export default AppInput;
