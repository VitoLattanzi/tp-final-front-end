import React, { useState, useEffect } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import ChatList from "../ChatList";
import ChatWindow from "../ChatWindow";
import TeclasGlobales from "../TeclasGlobales";
import "./ChatPage.css"
import { useChat } from "../context/ChatContext";
import { useUsers } from "../context/UserContext";

const ChatPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users } = useUsers();
  const { selectedUser, setSelectedUser, setMensajes } = useChat();

  useEffect(() => {
    if (id && users) {
      const user = users.find((u) => u.id.toString() === id);
      if (user) {
        setSelectedUser(user);
        setMensajes(user.mensajes || []);
      }
    }
  }, [id, users]);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setMensajes(user.mensajes || []);
    navigate(`/chat/${user.id}`);
  };

  return (
    <>
      <TeclasGlobales onEscape={() => setSelectedUser(null)} />
      <div className="left-panel">
        <ChatList onSelectUser={handleSelectUser} />
      </div>
      <div className="right-panel">
        <ChatWindow />
        <Outlet />
      </div>
    </>
  );
};

export default ChatPage;