// Main logo
import Logo from "@/assets/images/main-logo-black-1.png";

// Components
import { AppImage } from "@/features/app/components";

const Navbar: React.FC = () => (
  <div className="login__navbar">
    <AppImage width="143px" src={Logo} alt="Deskripsi gambar" />
  </div>
);

export default Navbar;
