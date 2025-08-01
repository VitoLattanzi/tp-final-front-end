import React from "react";
import ReactDOM from "react-dom/client"; 
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/context/UserContext";
import { ChatProvider } from "./components/context/ChatContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <UserProvider>
      <ChatProvider> 
        <App />
      </ChatProvider>
    </UserProvider>
  </BrowserRouter>
);