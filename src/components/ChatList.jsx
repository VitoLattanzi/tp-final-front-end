//estos son los chats de la lista del costado, digamos las personitas

import React from "react";
import { useSearchParams } from "react-router-dom";
import "../components/ChatList.css";
import users from "../data/user";
import {MoreVertical, Search, MessageCirclePlus} from "lucide-react";
import { useUsers } from "./context/UserContext";

const ChatList = ({ onSelectUser }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filtro = searchParams.get("buscar") || "";
  const { users } = useUsers();

  const handleInputChange = (e) => {
    setSearchParams({ buscar: e.target.value });
  };

  const usuariosFiltrados = users?.filter((user) =>
    user.nombre.toLowerCase().includes(filtro.toLowerCase())
  ) || [];

  return (
    <div className="ChatList">
      {/* Buscador */}
      <div className="ChatList-top">
        <div className="ChatList-top-ARRIBA">
          <p className="ChatList-top-izq">Chats</p>
          <div className="ChatList-top-derecha">
            <button className="ChatList_botones">
              <MessageCirclePlus />
            </button>
            <button className="ChatList_botones">
              <MoreVertical />
            </button>
          </div>
        </div>

        <input
          className="ChatList-buscador"
          type="text"
          placeholder="Buscar o empezar un chat"
          value={filtro}
          onChange={handleInputChange}
        />
      </div>

      {/* Lista de personas filtradas */}
      {usuariosFiltrados.length > 0 ? (
        usuariosFiltrados.map((user) => {
          // Obtener último mensaje si existe
          const ultimoMensaje =
            user.mensajes && user.mensajes.length > 0
              ? user.mensajes[user.mensajes.length - 1]
              : null;

          return (
            <React.Fragment key={user.id}>
              <div
                className="ChatList-persona"
                onClick={() => onSelectUser(user)}
              >
                <img
                  src={user.imagen}
                  alt={user.nombre}
                  className="ChatList-persona-img"
                />
                <div className="ChatList-contenedor-info">
                  <div className="ChatList-info-sup">
                    <p className="negrita ChatList-nombre">{user.nombre}</p>
                    <p className="ChatList-hora">
                      {ultimoMensaje ? ultimoMensaje.hora : user.time}
                    </p>
                  </div>
                  <div className="ChatList-info-inf">
                    <p className="ChatList-mensaje">
                      {ultimoMensaje ? ultimoMensaje.texto : user.LastMsj}
                    </p>
                    <p className="ChatList-dia">{user.lastday}</p>
                  </div>
                </div>
              </div>
              <hr className="separador" />
            </React.Fragment>
          );
        })
      ) : (
        <p className="ChatList-sin-resultados">No se encontraron coincidencias</p>
      )}
    </div>
  );
};

export default ChatList;