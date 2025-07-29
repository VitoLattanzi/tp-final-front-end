import { Routes, Route, Navigate } from "react-router-dom";
import ChatPage from "./Paginas/ChatPage";
import Estados from "./Paginas/Estados";
import Comunidades from "./Paginas/Comunidades";
import Grupos from "./Paginas/Grupos";
import Configuracion from "./Paginas/Config";
import ContactInfo from "./ContactInfo";
import LayoutConSidebar from "./LayoutConSidebar";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/chats" />} />
        <Route element={<LayoutConSidebar />}>
        <Route path="/chats" element={<ChatPage />} />
        <Route path="/chat/:id" element={<ChatPage />}>
          <Route path="info" element={<ContactInfo />} />
        </Route>
        <Route path="/estados" element={<Estados />} /> 
        <Route path="/comunidades" element={<Comunidades />} />
        <Route path="/grupos" element={<mensajes />} />
        <Route path="/configuracion" element={<Configuracion />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;  