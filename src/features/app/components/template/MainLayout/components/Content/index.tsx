// React Router DOM
import { Outlet } from "react-router-dom";

const Content: React.FC = () => (
  <div className="app__content">
    <Outlet />
  </div>
);

export default Content;
