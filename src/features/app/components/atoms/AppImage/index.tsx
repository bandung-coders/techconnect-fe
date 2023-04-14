// Interfaces
import { type IAppImageProps } from "./interfaces";

const AppImage: React.FC<IAppImageProps> = ({ src, width, alt, ...props }) => (
  <img src={src} width={width} alt={alt} {...props} />
);

export default AppImage;
