//Estilos
import './App.css'

//React Router Dom
import { Routes, Route } from "react-router-dom";

//Layout
import Layout from './layout/Layout.jsx';

//Páginas
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Explorar from './pages/Explorar/Explorar.jsx';
import NuevaSesion from './pages/NuevaSesion/NuevaSesion.jsx';
import Libreria from './pages/Libreria/Libreria.jsx';
import Perfil from './pages/Perfil/Perfil.jsx';

function App() {

  return (
    <Layout>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/nuevasesion" element={<NuevaSesion />} />
        <Route path="/libreria" element={<Libreria />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Layout>
  )
}

export default App


{/* <div className="App">
      <div className='Dashboard'>
        <Sidebar />
        <MainContent/>
      </div>
</div> */}