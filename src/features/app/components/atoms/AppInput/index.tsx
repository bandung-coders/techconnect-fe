import { AppText } from "@/features/app/components";

// CVA
import { type IAppInputProps } from "./cva";

const AppInput: React.FC<IAppInputProps> = ({ label, ...props }) => (
  <div>
    {label != null && (
      <AppText className="mb-2" weight="xbold">
        {label}
      </AppText>
    )}
    <input {...props} />
  </div>
);

export default AppInput;
