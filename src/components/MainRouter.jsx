import { Routes, Route, Navigate } from "react-router-dom";
import Estados from "../Paginas/Estados";
import Comunidades from "../Paginas/Comunidades";
import Grupos from "../Paginas/Grupos";
import Configuracion from "../Paginas/Config";


const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/chats" />} />
      <Route path="/chats" element={<ChatPage />} />
      <Route path="/estados" element={<Estados />} />
      <Route path="/comunidades" element={<Comunidades />} />
      <Route path="/grupos" element={<Grupos />} />
      <Route path="/configuracion" element={<Configuracion />} />
    </Routes>
  );
};

export default MainRouter;