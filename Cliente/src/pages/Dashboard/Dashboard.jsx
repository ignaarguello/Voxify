// Estilos
import './Dashboard.css'

//Componentes
import VideoPlayer from '../../componentes/VideoPlayer/VideoPlayer'
import SelectorCanciones from '../../componentes/SelectorCanciones/SelectorCanciones'


export default function Dashboard() {
  return (
    <div id='PaginaDashboardHome'>
      <div id='ContenedorTitulos_Dashboard'>
        <h2 id='TituloBienvenidoVoxify'>Bienvenido a <span id='SpanVoxify'>Voxify</span></h2>
        <span className='Subtitulo_CantaYConecta'>Canta y conecta con otras personas</span>
      </div>
    </div>
  )
}

