import Sidebar from "./ChatSideBar";
import { Outlet } from "react-router-dom";
import "./LayoutConSidebar.css"
  
const LayoutConSidebar = () => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-container">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutConSidebar;