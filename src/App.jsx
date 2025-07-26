import React, { useEffect, useState } from "react";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";
import TeclasGlobales from "./components/TeclasGlobales";
import users from "./data/user";
import Sidebar from "./components/ChatSideBar"
import "./App.css";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <div className="main-container">
      <Sidebar />
      <TeclasGlobales onEscape={() => setSelectedUser(null)} />
      <div className="left-panel">
        <ChatList users={users} onSelectUser={setSelectedUser} />
      </div>
      <div className="right-panel">
        <ChatWindow user={selectedUser} onBack={() => setSelectedUser(null)} />
      </div>
    </div>
  );
}

export default App;

