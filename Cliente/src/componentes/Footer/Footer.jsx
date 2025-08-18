import React from 'react'

//Estilos
import './Footer.css'

export default function Footer() {
  return (
    <div id='Footer'>
      {/* Menu Crear */}
      <div id='MenuCrearNuevaSesion'>
        <span className='BotonCrearSesion' onClick={() => alert('Iniciando Sesion...')}>Iniciar Sesion</span>
        <span  className='BotonFinalizarSesion'onClick={() => alert('Cerrando Sesion...')}>Finalizar Sesion</span>
      </div>
    </div>
  )
}
