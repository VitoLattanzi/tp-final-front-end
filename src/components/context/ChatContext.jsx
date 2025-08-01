import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [mensajes, setMensajes] = useState([]);

  return (
    <ChatContext.Provider
      value={{ selectedUser, setSelectedUser, mensajes, setMensajes }}
    >
      {children}
    </ChatContext.Provider>
  );
};