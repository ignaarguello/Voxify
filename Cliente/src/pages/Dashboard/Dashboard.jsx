import React from 'react'

// Estilos
import './Dashboard.css'

//Componentes
import VideoPlayer from '../../componentes/VideoPlayer/VideoPlayer'
import SelectorCanciones from '../../componentes/SelectorCanciones/SelectorCanciones'


export default function Dashboard() {
  return (
    <div id='PaginaDashboard'>
      <section id='SeccionFila_1'>
        <VideoPlayer />
        <div id='ContenedorImage'>
          <h2 id='TituloPruebaGratis'>Prueba Gratis</h2>
        </div>
      </section>
      <section id='SeccionFila_2'>
        <SelectorCanciones />
      </section>
    </div>
  )
}
