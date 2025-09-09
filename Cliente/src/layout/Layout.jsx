import React from 'react'

//Estilos
import './Layout.css'

//Componentes
import Sidebar from '../componentes/Sidebar/Sidebar'
import Footer from '../componentes/Footer/Footer'
import HeaderContent from '../componentes/HeaderContent/HeaderContent'

export default function Layout(props) {
    return (
        <div id='ContenedorGeneralLayout'>
            <section id='SubcontenedorDashboard'> {/* //Subcontenedor que representa el dashboard puntualmente */}
                <Sidebar />
                <div id='ContenidoLayout'>
                    {/* <HeaderContent titulo='Dashboard' /> */}
                    <div id='ChildrenLayout'>{props.children}</div>
                    <Footer />
                </div>
            </section>
        </div>
    )
}
