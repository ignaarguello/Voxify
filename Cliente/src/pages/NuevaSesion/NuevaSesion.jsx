import React from 'react'

// Estilos 
import './NuevaSesion.css'

// Componentes
import SessionRecorder from '../../componentes/SessionRecorder/SessionRecorder'

export default function NuevaSesion() {
  return (
    <div id='PaginaNuevaSesion'>
      <section className="Subcontenedor_NuevaSession">
       <SessionRecorder /> 
      </section>
      <section className="Subcontenedor_NuevaSession">
            
      </section>
    </div>
  )
}
