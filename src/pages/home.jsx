import React from "react";
import ChatList from "../components/ChatList"; //chats de la izq
import "../pages/home.css";

const home = () => {
    return (
    <div className="home-container">    
      <ChatList />   {/* Izquierda: lista de chats */}
      <div className="chat-container"> {/* Derecha: chat vacío hasta que se seleccione alguien */}
        <p>Seleccioná un chat para empezar a hablar</p>
      </div>
    </div>
  );
};



export default Home;