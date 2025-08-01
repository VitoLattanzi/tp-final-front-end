import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../components/ChatWindow.css";
import { useChat } from "../components/context/ChatContext";
import {
  Video,
  Phone,
  MoreVertical,
  Smile,
  Paperclip,
  Mic,
  Send,
  Trash,
} from "lucide-react";

const ChatWindow = () => {
  const { selectedUser, mensajes, setMensajes } = useChat();
  const [nuevoMensaje, setNuevoMensaje] = useState("");
  const [hoveredId, setHoveredId] = useState(null);
  const mensajesEndRef = useRef(null);

  const navigate = useNavigate();
  const { id } = useParams();

  // Carga los mensajes del usuario al abrir chat
  useEffect(() => {
    if (selectedUser) {
      setMensajes(selectedUser.mensajes || []);
    }
  }, [selectedUser]);

  // Scroll automático al fondo
  useEffect(() => {
    mensajesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensajes]);

  // Enviar mensaje
  const handleSend = () => {
    if (nuevoMensaje.trim() === "") return;

    const nuevo = {
      id: mensajes.length + 1,
      texto: nuevoMensaje,
      enviado: true,
      hora: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMensajes([...mensajes, nuevo]);
    setNuevoMensaje("");

    // Respuesta automática
    setTimeout(() => {
      const respuesta = {
        id: mensajes.length + 2,
        texto: "dame un rato, estoy ocupado",
        enviado: false,
        hora: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMensajes((prev) => [...prev, respuesta]);
    }, 1000);
  };

  // Enviar con Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // Eliminar mensaje
  const handleDeleteMessage = (id) => {
    const nuevos = mensajes.filter((msg) => msg.id !== id);
    setMensajes(nuevos);
  };

  if (!selectedUser) {
    return (
      <div className="ChatWindow-preview-sin-chat">
        <p>Seleccioná un chat para empezar a chatear.</p>
      </div>
    );
  }

if (!mensajes) return null;

  return (
    <div className="ChatWindow-chat-persona">
      {/* Header */}
      <div className="ChatWindow-header color-letra-blanco">
        <div
          className="ChatWindow-header-info-contacto cursor-pointer"
          onClick={() => navigate(`/chat/${selectedUser.id}/info`)}
        >
          <img
            src={selectedUser.imagen}
            alt={selectedUser.nombre}
            className="ChatWindow-header-img"
          />
          <div className="ChatWindow-header-info">
            <p className="ChatWindow-header-nombre">{selectedUser.nombre}</p>
            <span className="ChatWindow-header-descripcion">
              {selectedUser.descripcion}
            </span>
          </div>
        </div>

        <div className="ChatWindow-header-list">
          <Video className="ChatWindow-icon cursor-pointer" />
          <Phone className="ChatWindow-icon cursor-pointer" />
          <MoreVertical className="ChatWindow-icon cursor-pointer" />
        </div>
      </div>

      {/* Mensajes */}
      <div className="ChatWindow-fondo-mensajes">
        {mensajes.map((msg) => (
          <div
            key={msg.id}
            className={`ChatWindow-mensaje ${msg.enviado ? "enviado" : "recibido"}`}
            onMouseEnter={() => setHoveredId(msg.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="ChatWindow-burbuja">
              <p className="ChatWindow-texto">{msg.texto}</p>
              <span className="ChatWindow-hora">{msg.hora}</span>
              {hoveredId === msg.id && (
                <Trash
                  size={16}
                  className="ChatWindow-trash"
                  onClick={() => handleDeleteMessage(msg.id)}
                />
              )}
            </div>
          </div>
        ))}
        <div ref={mensajesEndRef} />
      </div>

      {/* Input */}
      <div className="ChatWindow-input">
        <Paperclip className="ChatWindow-input-icono cursor-pointer" />
        <div className="ChatWindow-input-contenedor-msj">
          <Smile className="ChatWindow-smile-icon cursor-pointer" />
          <input
            type="text"
            value={nuevoMensaje}
            onChange={(e) => setNuevoMensaje(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribí un mensaje"
          />
        </div>
        {nuevoMensaje.trim() === "" ? (
          <Mic className="ChatWindow-input-icono cursor-pointer" />
        ) : (
          <Send
            className="ChatWindow-input-icono cursor-pointer"
            onClick={handleSend}
          />
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
