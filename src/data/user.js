const users = [
  {
    id: 1,
    nombre: "Dupont ",
    LastMsj: "hola crack",
    imagen: "/imagenes/dupont.jpeg",
    time: "11:00",
    lastday: "lunes",
    descripcion: " soy el mejor 9 de la historia ",
    mensajes: [ 
      { id: 1, texto: "Hola crack", enviado: false, hora: "11:00" },
      { id: 2, texto: "¿Cómo va todo?", enviado: true, hora: "11:01" }
    ]
  },
  {
    id: 2,
    nombre: "Faf de Klerk",
    LastMsj: "Nos vemos mañana!",
    imagen: "/imagenes/faf.jpg",
    time: "11:00",
    lastday: "martes",
    descripcion: " soy la rubia mas linda ",
    mensajes: [
      { id: 1, texto: "Nos vemos mañana!", enviado: false, hora: "11:00" },
      { id: 2, texto: "si neneee", enviado: true, hora: "11:01" }
    ]
  },
  {
    id: 3,
    nombre: "aguntin creevy",
    LastMsj: "Che, ¿tenés un minuto?",
    imagen: "/imagenes/creevy.jpeg",
    time: "11:00",
    lastday: "jueves",
    descripcion: " salad, don´t win scrums ",
    mensajes: [
      { id: 1, texto: "Che, ¿tenés un minuto?", enviado: false, hora: "11:00" },
      { id: 2, texto: "decime pa", enviado: true, hora: "11:01" }
    ]
  },
  
];

export default users;