import React from 'react' //para cualquier archivo .jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//js tiene 2 tipos de archivos, common js y module, estamos usando module
//esto lo cemos en el index ya que este pone tipy module y los permite el import, from y export

//esta funcion permite enlasar la app en react con mi index
let div_root  = document.getElementById('root')

createRoot(div_root).render(
  <App />
)
