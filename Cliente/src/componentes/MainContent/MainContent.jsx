import React from 'react'

//Estilos
import './MainContent.css'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import HeaderContent from '../HeaderContent/HeaderContent'

export default function MainContent() {
  return (
    <div id='MainContent'>
      <section id='SeccionFila_1'>
        <HeaderContent titulo='Dashboard' />
        <VideoPlayer />
      </section>
      <section id='SeccionFila_2'>
          Seccion 2
      </section>
    </div>
  )
}
