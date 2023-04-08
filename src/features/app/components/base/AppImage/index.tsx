// Interfaces
import { type IAppImageProps } from "./interfaces";

const AppImage: React.FC = ({ ...props }: IAppImageProps) => (
  <img {...props} />
);

export default AppImage;
