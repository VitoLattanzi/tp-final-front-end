import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import users from "../data/user";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";
import TeclasGlobales from "../components/TeclasGlobales";

const ChatPage = () => {
  const { id } = useParams(); // para leer el ID de la URL
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
    navigate(`/chat/${user.id}`); // cambia la URL
  };

  return (
    <>
      <TeclasGlobales onEscape={() => setSelectedUser(null)} />
      <div className="left-panel">
        <ChatList users={users} onSelectUser={handleSelectUser} />
      </div>
      <div className="right-panel">
        <ChatWindow user={selectedUser} onBack={() => setSelectedUser(null)} />
      </div>
    </>
  );
};

export default ChatPage;