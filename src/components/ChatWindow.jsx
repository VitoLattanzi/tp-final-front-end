import React, { useEffect, useRef, useState } from "react";
import "../components/ChatWindow.css";
import {
  Video,
  Phone,
  MoreVertical,
  Smile,
  Paperclip,
  Mic,
  Send,
} from "lucide-react";

const ChatWindow = ({ user }) => {
  const [mensajes, setMensajes] = useState([]);
  const [nuevoMensaje, setNuevoMensaje] = useState("");
  const mensajesEndRef = useRef(null);

  // Carga los mensajes del usuario especifico al abrir su chat
  useEffect(() => {
    if (user) {
      setMensajes(user.mensajes || []);
    }
  }, [user]);

  // Scroll automático al final, va bajando la pantalla
  useEffect(() => {
    mensajesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensajes]);

  //cargar el nuevo mensaje
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

    // q haga una respuesta automática no importa que
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

  //para q se manden con enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  if (!user) {
    return (
      <div className="ChatWindow-preview-sin-chat">
        <p>Seleccioná un chat para empezar a chatear.</p>
      </div>
    );
  }

  return (
    <div className="ChatWindow-chat-persona">
      {/* Header */}
      <div className="ChatWindow-header color-letra-blanco">
          <div className="ChatWindow-header-info-contacto">
            <img
              src={user.imagen}
              alt={user.nombre}
              className="ChatWindow-header-img"
            />
            <div className="ChatWindow-header-info">
              <p className="ChatWindow-header-nombre">{user.nombre}</p>
              <span className="ChatWindow-header-descripcion">{user.descripcion}</span>
            </div>
          </div>
        <div className="ChatWindow-header-list">
          <Video className="ChatWindow-icon cursor-pointer" />
          <Phone className="ChatWindow-icon cursor-pointer" />
          <MoreVertical className="ChatWindow-icon cursor-pointer" />
        </div>
      </div>

      {/* Mensajes */}
      <div className="ChatWindow-mensajes">
        {mensajes.map((msg) => (
          <div
            key={msg.id}
            className={`ChatWindow-mensaje ${msg.enviado ? "enviado" : "recibido"}`}
          >
            <p className="ChatWindow-texto">{msg.texto}</p>
            <span className="ChatWindow-hora">{msg.hora}</span>
          </div>
        ))}
        <div ref={mensajesEndRef} />
      </div>

      {/* Input de envío */}
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
          <Send className="ChatWindow-input-icono cursor-pointer" onClick={handleSend} />
        )}
      </div>  
    </div>
  );
};

export default ChatWindow;
