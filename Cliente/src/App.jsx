//Estilos
import './App.css'

//React Router Dom
import { Routes, Route } from "react-router-dom";

//Layout
import Layout from './layout/Layout.jsx';

//Páginas
import Dashboard from './pages/Dashboard/Dashboard.jsx'; 

function App() {

  return (
    <Layout>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Dashboard />} />
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