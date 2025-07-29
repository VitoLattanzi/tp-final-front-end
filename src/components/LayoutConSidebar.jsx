import Sidebar from "./ChatSideBar";
import { Outlet } from "react-router-dom";
import "./LayoutConSidebar.css"

const LayoutConSidebar = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <Outlet /> {/* para las paginas distintas y q se vea el sidebar siempre */}
    </div>
  );
};

export default LayoutConSidebar;