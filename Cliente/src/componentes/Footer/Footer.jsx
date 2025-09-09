import React from 'react'

//Estilos
import './Footer.css'

export default function Footer() {
  return (
    <div id='Footer'>
      {/* Menu Crear */}
      <div id='ToogleMenuFooter'>
        <span className='ToggleBotonFooter BotonCrearSesion' onClick={() => alert('Iniciando Sesion...')}>Iniciar Sesion</span>
        <span  className='ToggleBotonFooter  BotonFinalizarSesion'onClick={() => alert('Cerrando Sesion...')}>Finalizar Sesion</span>
      </div>
    </div>
  )
}
