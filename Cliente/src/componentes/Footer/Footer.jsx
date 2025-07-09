import React from 'react'

//Estilos
import './Footer.css'

export default function Footer() {
  return (
    <div id='Footer'>
      {/* Menu Crear */}
      <div id='MenuCrearNuevaSesion'>
        <span onClick={() => alert('Creando Sesion...')}>Nueva Sesión</span>
      </div>
    </div>
  )
}
