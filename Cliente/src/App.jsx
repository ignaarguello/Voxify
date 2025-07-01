//Estilos
import './App.css'
//Componentes
import Sidebar from './componentes/Sidebar/Sidebar'
import MainContent from './componentes/MainContent/MainContent.JSX'

function App() {

  return (
    <div className="App">
      <div className='Dashboard'>
        <Sidebar />
        <MainContent/>
      </div>
    </div>
  )
}

export default App
