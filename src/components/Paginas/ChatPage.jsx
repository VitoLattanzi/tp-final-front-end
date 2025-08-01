import React, { useState, useEffect } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import ChatList from "../ChatList";
import ChatWindow from "../ChatWindow";
import TeclasGlobales from "../TeclasGlobales";
import "./ChatPage.css"
import { useChat } from "../context/ChatContext";
import { useUsers } from "../context/UserContext";

const ChatPage = () => {
  const { users } = useUsers();
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (id) {
      const user = users.find((u) => u.id.toString() === id);
      setSelectedUser(user || null);
    }
  }, [id]);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    navigate(`/chat/${user.id}`);
  };

  return (
    <>
      <TeclasGlobales onEscape={() => setSelectedUser(null)} />
      <div className="left-panel">
        <ChatList onSelectUser={handleSelectUser} />
      </div>
      <div className="right-panel">
        <ChatWindow onBack={() => setSelectedUser(null)} />
      </div>
       <Outlet /> 
    </>
  );
};

export default ChatPage;