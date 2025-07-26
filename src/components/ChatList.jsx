//estos son los chats de la lista del costado, digamos las personitas

import React from "react";
import "../components/ChatList.css";
import users from "../data/user";
import {MoreVertical, Search, MessageCirclePlus} from "lucide-react";

const ChatList = ({ users, onSelectUser }) => {
  return (
    <div className="ChatList">
      {/* Buscador */}
      <div className="ChatList-top">
        {/* "chat" agregar contacto y 3 . */}
        <div className="ChatList-top-ARRIBA">
          <p className="ChatList-top-izq">Chats</p>
          <div className="ChatList-top-derecha">
            <button className="ChatList_botones"><MessageCirclePlus/></button>
            <button className="ChatList_botones"><MoreVertical/></button>
            </div>
        </div>
        {/* barrita search */}
        <input  className="ChatList-buscador" type="text" placeholder="Buscar o empezar un chat" />      
      </div>  

      {/* listado de contactos */}
        {users.map((user) => (
        <>
          <div
            className="ChatList-persona"
            key={user.id}
            onClick={() => onSelectUser(user)} 
            >
            <img src={user.imagen} alt={user.nombre} className="ChatList-persona-img" />
            <div className="ChatList-contenedor-info">
              <div className="ChatList-info-sup">
                <p className="negrita ChatList-nombre">{user.nombre}</p>
                <p className="ChatList-hora">{user.time}</p>             
              </div>
              <div className="ChatList-info-inf">
                <p className="ChatList-mensaje">{user.LastMsj}</p>
                <p className="ChatList-dia">{user.lastday}</p>
              </div>        
            </div>
          </div>
          <hr className="separador"/>
        </>  /* SOLO PARA SOLUCIONAR Y Q LO LEA JSX */
      ))}
    </div>
  );
};

export default ChatList;



