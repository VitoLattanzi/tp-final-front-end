#  WhatsApp Clone - Trabajo Práctico Final (Frontend)

Este proyecto es un **clon funcional de la interfaz de WhatsApp Web**, desarrollado como parte del **Trabajo Práctico Final del curso de Frontend UTN e-Learning**.  
La aplicación simula una experiencia completa de chat, sin necesidad de backend, utilizando `React` y librerías modernas del ecosistema.

---

## Desafío propuesto

Desarrollar una aplicación web SPA que cumpla con las siguientes condiciones:
- Tener navegación entre secciones (enrutamiento).
- Mostrar una lista dinámica de elementos.
- Incluir al menos un formulario controlado.
- Utilizar estados, props y contextos de forma coherente.
- Ser responsiva (adaptable a distintos tamaños de pantalla).
- Incluir buenas prácticas de diseño, componentes y estructura de carpetas.

Mi propuesta fue replicar la **experiencia de WhatsApp Web**, con:
- Lista de chats con foto, nombre y último mensaje (aunq me costo esta parte).
- Pantalla de chat con mensajes de ida y vuelta.
- Barra de búsqueda de contactos y mensajes.
- Ventana de información del contacto.
- Mensajes que se pueden eliminar, pasando x ariiba con el mause y en celular tocando.
- Persistencia usando `localStorage`.

---

##  Tecnologías y librerías utilizadas

- **React** con `Vite` (entorno de desarrollo rápido).
- **React Router Dom**: navegación entre secciones (`/chats`, `/chat/:id`, `/chat/:id/info`).
- **Context API**: manejo global de usuarios y mensajes.
- **Lucide React**: íconos modernos y minimalistas.

---

##  Funcionalidades principales

-  Navegación fluida entre lista de chats y ventana de conversación.
-  Vista de información del contacto (foto, nombre, descripción).
-  Barra de búsqueda dinámica (filtra contactos y mensajes).
-  Envío de mensajes simulados (con estados controlados).
-  Eliminación de mensajes individuales.
-  Diseño responsive y centrado en UX.
-  Almacenamiento local persistente de los chats.

---

##  Dificultades enfrentadas (opcional)

- La sincronización entre rutas (`/chat/:id` y `/chat/:id/info`) requirió planificación para mantener el layout intacto.
- Manejar el `Context` para compartir datos entre componentes sin prop drilling.
- Controlar la visualización condicional de elementos (como el botón de borrar mensajes solo al hacer hover), si bien pude hacer q funcione no llegue  atiempo a hacer q este se quede unos segundos para q lo podamos utilizar.
- Mantener el estado de mensajes actualizado en `localStorage` sin perder estructura ni funcionalidad.
- El uso de las rutas, tenia gran parte hecho y luego cuando mandaron las consignas debi cambiar muchisimas cosas. 

