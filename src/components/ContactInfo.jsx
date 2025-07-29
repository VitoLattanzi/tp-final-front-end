import React from "react";
import { useParams } from "react-router-dom";
import users from "../data/user";
import "./ContactInfo.css";

const ContactInfo = () => {
  const { id } = useParams();
  const user = users.find((u) => u.id.toString() === id);

  if (!user) return null;

  return (
    <div className="ContactInfo">
      <img src={user.imagen} alt={user.nombre} className="ContactInfo-img" />
      <h2>{user.nombre}</h2>
      <p>{user.descripcion}</p>
      <hr />
      <button className="ContactInfo-btn">Silenciar</button>
      <button className="ContactInfo-btn">Cambiar fondo</button>
    </div>
  );
};

export default ContactInfo;