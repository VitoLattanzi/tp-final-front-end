import React, { useState, useEffect } from "react";
import { Outlet, useParams, useNavigate, useLocation } from "react-router-dom";
import ChatList from "../ChatList";
import ChatWindow from "../ChatWindow";
import TeclasGlobales from "../TeclasGlobales";
import "./ChatPage.css"
import { useChat } from "../context/ChatContext";
import { useUsers } from "../context/UserContext";

const ChatPage = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { users } = useUsers();
  const { selectedUser, setSelectedUser, setMensajes } = useChat();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const showChatList = isMobile ? !id : true;
  const showChatWindow = isMobile ? !!id && !pathname.includes("/info") : true;
  const showContactInfo = isMobile ? pathname.includes("/info") : true;

  return (
    <>
      <TeclasGlobales onEscape={() => setSelectedUser(null)} />
      {showChatList && (
        <div className="left-panel">
          <ChatList onSelectUser={handleSelectUser} />
        </div>
      )}
      {showChatWindow && (
        <div className="right-panel">
          <ChatWindow />
        </div>
      )}
      {showContactInfo && (
        <div>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default ChatPage;