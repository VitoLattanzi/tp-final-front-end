import React, { useState } from "react";
import "../components/ChatSideBar.css";
import { useNavigate } from "react-router-dom";
import {
  MessageSquareText,
  CircleDot,
  MessageCircle,
  Users,
  Settings,
} from "lucide-react";

const iconos = [
  { id: "chats", icon: <MessageSquareText />, label: "Chats", ruta: "/chats" },
  { id: "estados", icon: <CircleDot />, label: "Estados", ruta: "/estados" },
  { id: "comunidades", icon: <MessageCircle />, label: "comunidades", ruta: "/comunidades" },
  { id: "grupos", icon: <Users />, label: "Grupos", ruta: "/grupos" },
];

const Sidebar = () => {
  const [active, setActive] = useState("chats");
  const navigate = useNavigate();
  
  return (
    <div className="ChatSideBar">
      <div className="ChatSideBar-arriba">
        {iconos.map((item) => (
          <div className="tooltip-container" key={item.id}>
            <button
              className={`ChatSideBar-icon-btn ${active === item.id ? "activo" : ""}`}
              onClick={() => {
                setActive(item.id);
                navigate(item.ruta); 
              }}
              title={item.label}
            >
              {item.icon}
            </button>
          </div>
        ))}
      </div>

      <div className="ChatSideBar-abajo">
        <button
          className={`ChatSideBar-icon-btn ${active === "configuracion" ? "activo" : ""}`}
          onClick={() => {
            setActive("configuracion");
            navigate("/configuracion");
          }}
          title="Configuración"
        >
          <Settings />
        </button>
        <img
          src="/imagenes/foto de perfin.jpeg" 
          alt="Tu perfil"
          className="ChatSideBar-avatar"
        />
      </div>
    </div>
  );
};

export default Sidebar;
