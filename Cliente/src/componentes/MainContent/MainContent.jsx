import React from 'react'

//Estilos
import './MainContent.css'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import HeaderContent from '../HeaderContent/HeaderContent'

export default function MainContent() {
  return (
    <div id='MainContent'>
        <HeaderContent titulo='Dashboard' />
      <section id='SeccionFila_1'>
        <VideoPlayer />
        <div id='ContenedorImage'>
          <h2 id='TituloPruebaGratis'>Prueba Gratis</h2>
        </div>
      </section>
      <section  id='SeccionFila_2'>
          
      </section>
    </div>
  )
}
