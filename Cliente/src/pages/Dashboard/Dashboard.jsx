// Estilos
import './Dashboard.css'

//Componentes
import VideoPlayer from '../../componentes/VideoPlayer/VideoPlayer'
import SelectorCanciones from '../../componentes/SelectorCanciones/SelectorCanciones'


export default function Dashboard() {
  return (
    <div id='PaginaDashboardHome'>
      <h2 id='TituloBienvenidoVoxify'>Bienvenido a <span id='SpanVoxify'>Voxify</span></h2>
      <div id='ContenedorParrafosPrincipales_Dashboard'>
        <span className='ParrafoPrincipalIndividual'>Crea y Desarrolla tu sesion online</span>
        <span className='ParrafoPrincipalIndividual'>Explora y conecta con otras personas</span>
        <span className='ParrafoPrincipalIndividual'>Edita y guarda tu sesion</span>
      </div>
    </div>
  )
}

