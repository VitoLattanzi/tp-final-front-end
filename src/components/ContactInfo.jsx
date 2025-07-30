import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import users from "../data/user";
import "./ContactInfo.css";
import { X } from "lucide-react";

const ContactInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = users.find((u) => u.id.toString() === id);

  if (!user) return null;

  return (
    <div className="ContactInfo">
      <div className="ContactInfo-header-cruz">
        <button className="ContactInfo-cruz" onClick={() => navigate(`/chat/${id}`)}>
          <X />
        </button>
        <span className="ContactInfo-palabras">
          info del contacto
        </span>
      </div>
      <img src={user.imagen} alt={user.nombre} className="ContactInfo-img" />
      <h2 className="ContactInfo-nombre" >{user.nombre}</h2>
      <p className="ContactInfo-descripcion" >{user.descripcion}</p>
      <hr />
      <button className="ContactInfo-btn">Silenciar</button>
      <button className="ContactInfo-btn">Cambiar fondo</button>
    </div>
  );
}
export default ContactInfo;