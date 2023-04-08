// Main logo
import Logo from "@/assets/images/main-logo-black-1.png";

// Components
import AppImage from "@/features/app/components/base/AppImage";

const Navbar: React.FC = () => (
  <div className="flex justify-center border-b border-gray-1 py-7">
    <AppImage src={Logo} alt="Deskripsi gambar" />
  </div>
);

export default Navbar;
