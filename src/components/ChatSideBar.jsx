import React, { useState } from "react";
import "../components/ChatSideBar.css";
import {
  MessageSquareText,
  CircleDot,
  MessageCircle,
  Users,
  Settings,
} from "lucide-react";

const iconos = [
  { id: "chats", icon: <MessageSquareText />, label: "Chats" },
  { id: "estados", icon: <CircleDot />, label: "Estados" },
  { id: "canales", icon: <MessageCircle />, label: "Mensajes" },
  { id: "comunidades", icon: <Users />, label: "Grupos" },
];

const Sidebar = () => {
  const [active, setActive] = useState("chats");

  return (
    <div className="ChatSideBar">
      <div className="ChatSideBar-arriba">
        {iconos.map((item) => (
          <div className="tooltip-container" key={item.id}>
            <button
              className={`ChatSideBar-icon-btn ${
                active === item.id ? "activo" : ""
              }`}
              onClick={() => setActive(item.id)}
              title={item.label} // tooltip nativo
            >
              {item.icon}
            </button>
          </div>
        ))}
      </div>

      <div className="ChatSideBar-abajo">
        <button
          className={`ChatSideBar-icon-btn ${
            active === "settings" ? "activo" : ""
          }`}
          onClick={() => setActive("settings")}
          title="Configuración"
        >
          <Settings />
        </button>
        <img
          src="/imagenes/tuImagenPerfil.jpg"
          alt="Tu perfil"
          className="ChatSideBar-avatar"
        />
      </div>
    </div>
  );
};

export default Sidebar;
